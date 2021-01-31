
# Creating a Component
A component is made up of three parts:

Template- HTML

Class- TypeScript + Data & Methods

Metadata- Informations


## Create new component from Angular CLI

```
ng g c test
```
### Result
CREATE src/app/test/test.component.css

CREATE src/app/test/test.component.html

CREATE src/app/test/test.component.spec.ts

CREATE src/app/test/test.component.ts

UPDATE src/app/app.module.ts


## Include new component in App
1. Check test.component.ts to find the name of selector (app-test)
2. Go to src/app/test.component.html <--- ROOT COMPONENT
3. Include <app-test></app-test> in root component
4. Use ng serve with Angular CLI or npm start to run project
5. App runs on default port http://localhost:4200


## 3 ways to specify a Selector

In test.components.ts, go to the metadata of your component decorator


1. Use it as a custom HTML tag
<app-test></app-test>

```
@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
```

2. Use it as an HTML class
<div class="app-test"></div>

```
@Component({
    selector: '.app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
```

3. Use it as an HTML attribute 
<div app-test></div>

```
@Component({
    selector: '[app-test]',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
```

## Change the template


```
@Component({
    selector: '[app-test]',
    templateURL: './test.component.html',
    styleUrls: ['./test.component.css']
})
```

Inline
1. Change templateUrl to template
2. Define html within the template property

```
@Component({
    selector: '[app-test]',
    template: '<div>Inline template</div>',
    styleUrls: ['./test.component.css']
})
```

Multiple inline lines of HTML code
1. Use backticks
2. Insert multiple lines of HTML code

```
@Component({
    selector: '[app-test]',
    template: `<div>Inline template</div>`,
    styleUrls: ['./test.component.css']
})
```

## Change the styles

```
@Component({
    selector: '[app-test]',
    template: `<div>Inline template</div>`,
    styleUrls: ['./test.component.css']
})
```

Inline styles
```
@Component({
    selector: '[app-test]',
    template: `<div>Inline template</div>`,
    styles: [`
    div{
        color: red;
    }
    `]
})
```
1. Change styleURL to styles
2. Use backticks to use multiple lines of CSS