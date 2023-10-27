import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './mock-interceptor.service';

describe('InterceptorsServiceService', () => {
  let service: HttpErrorInterceptorService;
    

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ToastrModule.forRoot()],
        });
    service = TestBed.inject(HttpErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

