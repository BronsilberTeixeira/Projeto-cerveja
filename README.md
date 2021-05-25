# CervTreino

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
    pipe(
      map((value: any) => value.trim()),
      filter(value => value.lenght > 3),
      debounceTime(200),
      distinctUntilChanged(),
      //tap((value: any) => console.log(value)),
      switchMap((value: any) => this.http.get(this.SEARCH_URL,{
      params: {
        search: value,
        fields:this.fields
      }
      })),
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );
  }

  onSearch(){
    const fields ='name, tagline, first_brewed'
    let value = this.queryField.value;
    if(value && (value = value.trim()) !== ''){

    const params:any = {
      search: value,
      fields: fields
    };


    this.results$ = this.http
    .get(this.SEARCH_URL, {params})
    .pipe(
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );

    }
  }

 queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.punkapi.com/v2/beers';
  results$: Observable<any>  ;
  total: number = 0;
  readonly fields ='name, tagline, first_brewed';
