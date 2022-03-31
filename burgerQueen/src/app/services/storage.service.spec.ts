import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);


    // mock de localStorage
    let storeLoc: object | any = {};
    const mockLocalStorage = {
      set: (key: string, value: string) => {
        return storeLoc[key] = `${value}`;
      },
      get: (key: string ) => {
        return (key in storeLoc) ? storeLoc[key] : null;
      },
      clear: () => {
        return storeLoc = {};
      },
    }

    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.set);
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.get);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    // mock de sessionStorage
    let storeSess: object | any = {};
    const mockSessionStorage = {
      setCurrentUser: (key: string, value: string) => {
        return storeSess[key] = `${value}`;
      },
      getCurrentUser: (key: string) => {
        return (key in storeSess) ? storeSess[key] : null;
      },
      removeCurrentUser: () => {
        return storeSess = {};
      },
    }

    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockSessionStorage.setCurrentUser);
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockSessionStorage.getCurrentUser);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockSessionStorage.removeCurrentUser);
  });

  it('storageService should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('LocalStorage', () => {
    const mockOrderList: object[] = [{
      category: "hamburguesas",
      id: "HAMB-D002-CAR-QUE",
      img: "https://firebasestorage.googleapis.com/v0/b/burguerqueen-baebc.appspot.com/o/carta-im%C3%A1genes%2Fdoble.jpg?alt=media&token=98c8d9f5-be35-4b0c-ac20-d2b9283fb44d",
      name: "Hamburguesa doble de tipo Carne con Queso",
      price: 16,
      quantity: 1,
      subtotal: 16,
    },
    {
      category: "bebidas",
      docId: "qO8KrhOFPQ5pJryoPXSm",
      id: "INCA-B009",
      img: "https://firebasestorage.googleapis.com/v0/b/burguerqueen-baebc.appspot.com/o/carta-im%C3%A1genes%2FincaKola1.jpg?alt=media&token=03f0b61a-e45f-4f35-a567-d4e09167554a",
      name: "Gaseosa Inca Kola 500ml",
      price: 7,
      quantity: 1,
      subtotal: 7,
    }]
  
    it('should store the orderList in localStorage',
      () => {
        service.set('orderList', mockOrderList);
        expect(localStorage.getItem('orderList')).toEqual(JSON.stringify(mockOrderList));
      }
    );
  
    it('should remove the orderList in localStorage',
      () => {
        service.clear();
        expect(localStorage.getItem('orderList')).toEqual(null);
      }
    );
  });

  describe('SessionStorage', () => {
    const mockUserData: object | any = {
      apellidoMaterno: "Romero",
      apellidoPaterno: "López",
      correo: "miguel.lopez@gmail.com",
      dni: 56104731,
      estado: "Activo",
      fechaActualizacion: {seconds: 1647466881, nanoseconds: 166000000},
      fechaCreacion: {seconds: 1647466881, nanoseconds: 166000000},
      nombres: "Miguel",
      rol: "Mesero",
      telefono: "992361570",
    }
  
    it('should store the currentUser in sessionStorage',
      () => {
        service.setCurrentUser('currentUser', mockUserData);
        expect(sessionStorage.getItem('currentUser')).toEqual(JSON.stringify(mockUserData));
      }
    );
  
    it('should remove the currentUser in sessionStorage',
      () => {
        service.removeCurrentUser();
        expect(localStorage.getItem('currentUser')).toEqual(null);
      }
    );
  });
});
