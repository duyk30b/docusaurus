# IOC - Inversion of Control

Sự khác biệt giữa 3 khái niệm: Dependency Inversion Principle, Inversion of Control và Dependency Injection:
- Dependency Inversion Principle (DIP): Đây là một nguyên lý để thiết kế và viết code.
- Inversion of Control (IoC): Đây là một design pattern được tạo ra để code có thể tuân thủ nguyên lý Dependency Inversion. Có nhiều cách hiện thực pattern này: ServiceLocator, Event, Delegate, … Dependency Injection là một trong các cách đó.
- Dependency Injection: Đây là một cách để hiện thực Inversion of Control Pattern (Có thể coi nó là một design pattern riêng cũng được). Các module phụ thuộc (dependency) sẽ được inject vào module cấp cao.

## 1. Đặt vấn đề
```javascript
// Module cấp thấp
class CatRepository {
    public getCatName(id: number | string): string {
        return `Mina - ${id}` // we should get it from Database in real world
    }
}

// Module cấp cao
class CatService {
    // Lỗi 1: không sử dụng cụ thể 1 class
    private readonly catRepository: CatRepository

    constructor() {
        // Lỗi 2: không khởi tạo 1 class bên trong 1 class khác 
        this.catRepository = new CatRepository()
    }

    getCatName(id: number | string): string {
        return this.catRepository.getCatName(id)
    }
}

const catService = new CatService();
console.log(catService.getCatName(4))  // Mina - 4

// Code như trên sẽ gây sự ràng buộc chặt chẽ giữa 2 module
```

## 2. Dependency Inversion Principle (DIP)
```javascript
interface ICatRepository {
    getCatName: (id: number | string) => string
}

// Module cấp thấp
class CatRepository implements ICatRepository {
    public getCatName(id: number | string): string {
        return `Mina - ${id}` // we should get it from Database in real world
    }
}

// Module cấp cao
class CatService {
    // Ràng buộc giữa 2 class thông qua interface
    private readonly catRepository: ICatRepository

    constructor() {
        // Lỗi 2: không khởi tạo 1 class bên trong 1 class khác 
        this.catRepository = new CatRepository()
    }

    getCatName(id: number | string): string {
        return this.catRepository.getCatName(id)
    }
}

const catService = new CatService();
console.log(catService.getCatName(4))  // Mina - 4

// Code như trên vẫn còn sự ràng buộc chặt chẽ giữa 2 module
```

## 3. Factory Pattern
```javascript
interface ICatRepository {
    getCatName: (id: number | string) => string
}

class CatRepositoryFactory {
    static getCatRepository(): CatRepository {
        return new CatRepository()
    }
}

// Module cấp thấp hơn
class CatRepository implements ICatRepository {
    public getCatName(id: number | string): string {
        return `Mina - ${id}` // we should get it from Database in real world
    }
}

// Module cấp cao hơn
class CatService {
    // Ràng buộc giữa 2 class thông qua Interface
    private readonly catRepository: ICatRepository

    constructor() {
        // Khởi tạo class thông qua Factory
        this.catRepository = CatRepositoryFactory.getCatRepository()
    }

    getCatName(id: number | string): string {
        return this.catRepository.getCatName(id)
    }
}

const catService = new CatService();
console.log(catService.getCatName(4))  // Mina - 4

// Khi thay đổi module cấp thấp sẽ không cần phải sửa lại module cấp cao, chỉ cần cập nhật Factory là được
```

## 4. Dependency Injection
```javascript
interface ICatRepository {
    getCatName: (id: number | string) => string
}

// Module cấp thấp hơn
class CatRepository implements ICatRepository {
    public getCatName(id: number | string): string {
        return `Mina - ${id}` // we should get it from Database in real world
    }
}

// Module cấp cao hơn
class CatService {
    // Ràng buộc giữa 2 class thông qua Interface
    private readonly catRepository: ICatRepository;

    // Khởi tạo class bằng cách Inject qua Contructor
    constructor(catRepository: ICatRepository) {
        this.catRepository = catRepository
    }

    getCatName(id: number | string): string {
        return this.catRepository.getCatName(id)
    }
}

// Trách nhiệm khởi tạo các Class ở DIContainer
class DIContainer {
    private readonly catService: CatService
    constructor() {
        this.catService = new CatService(new CatRepository())
        console.log(this.catService.getCatName(4))  // Mina - 4
    }
}

new DIContainer()

// Khi thay đổi module cấp thấp sẽ không cần phải sửa lại module cấp cao, chỉ cần cập nhật Container là được

```
