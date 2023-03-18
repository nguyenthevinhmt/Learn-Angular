## Data binding

[properties binding] = "'expression'" : thường dùng trong các thẻ input, expression là biến trong app.component.ts
ví dụ: có thể sử dụng
`<input type = "text" value = "hello">`
với properties binding ta có thể là như sau:
`<input [type] = "'inputType'" [value] = "'inputValue'">`
trong đó inputType và inputValue là các biến được khai báo public trong app.component.ts
ngoài ra, nếu muốn in một giá trị của một biến public được khai báo trong app.component.ts thì ta có thể sử dụng như sau:
`<p>{{user.name}}</p>`
trong app.component.ts ta có khai báo một object user có chứa thuộc tính name.

## Event binding

ví dụ ta có một thẻ input:
`<input type = "text" (click) = handler()>`

thì click là mô tả sự kiện click, giống onclick trong js
handler() là một function trong app.component.ts

-Two way binding: ta có thêm một thẻ input nữa như sau:
`<input type = "text" [(ngModel)] = "name">`
trong đó ngModel phải được import FormModel trong app.module.ts, lúc này nếu ta thay đổi giá trị của input thì name trong app.component.ts cũng được binding theo.

## #ngIf

-là một structure directive

ví dụ:

`

<div style="display: flex; flex-direction: row; margin-bottom: 20px">
  <button (click)="user.age = user.age - 1">-</button>
  <p>{{ user.age }}</p>
  <button (click)="user.age = user.age + 1">+</button>
</div>
<div *ngIf="user.age >= 18; else under18">This is sexy man</div>
<ng-template #under18>You too young to see this content</ng-template>
`
## ngFor

- cũng là một structure directive
ta gán \*ngFor ở đâu thì nó sẽ nhân bản theo vòng lặp ra các HTMLElement tương ứng
ví dụ:
`
<h1>Day 5 - ngFor</h1>
<ul *ngFor="let user of user">
  <li>{{ user.name }} - {{ user.address }} - {{ user.age }}</li>
</ul>
`

## thì trong HTML file sẽ tạo ra được 3 phần tử ul chứa các li tương ứng với vòng lặp

`

<h1>Day 5 - ngFor</h1>
<ul>
  <li *ngFor="let user of user">{{ user.name }} - {{ user.address }} - {{ user.age }}</li>
</ul>
`
tương tự như vậy thì ở đây sẽ render ra một thẻ ul chứa 3 thẻ li tương ứng với số phần tử trong object mà vòng lặp lặp qua
