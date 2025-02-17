# c-slider

滑动条，展示当前值和可选范围。用于替代原生`input[type=range]`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
    import './node_modules/wbc-ui/components/c-slider.js';
</script>
<!-- 使用 -->
<c-slider></c-slider>
```

`c-slider`属性与原生`input[type=range]`大致相同，如下

## 初始值`defaultvalue`

设置或返回滑块条的默认值（默认为0）。

<c-slider></c-slider>
<c-slider defaultvalue="30"></c-slider>
<c-slider defaultvalue="50"></c-slider>

```html
<c-slider></c-slider>
<c-slider defaultvalue="30"></c-slider>
<c-slider defaultvalue="50"></c-slider>
```

## 禁用`disabled`

通过`disabled`可以禁用滑动条。

<c-slider defaultvalue="50" disabled></c-slider>
<c-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></c-switch>

```html
<c-slider defaultvalue="50" disabled></c-slider>
```

JavaScript操作`get`、`set`

```js
slider.disabled; //获取
slider.disabled = false;
slider.disabled = true;
//原生属性操作
slider.setAttribute('disabled','');
slider.removeAttribute('disabled');
```

## 提示`showtips`

可以添加`showtips`属性，可以在滑动时显示`value`值。

<c-slider defaultvalue="50" showtips></c-slider>

```html
<c-slider defaultvalue="50" showtips></c-slider>
```

JavaScript操作`set`

```js
slider.showtips = false;
slider.showtips = true;
//原生属性操作
slider.setAttribute('showtips','');
slider.removeAttribute('showtips');
```

## 前缀`prefix`、后缀`suffix`

在`showtips`的情况下，如果添加`prefix`或者`suffix`，可以在显示`value`时追加一个前（后）缀。比如单位，百分比。

<c-slider defaultvalue="30" showtips prefix="$"></c-slider>
<c-slider defaultvalue="50" showtips prefix="value:"></c-slider>
<c-slider defaultvalue="30" showtips suffix="%"></c-slider>
<c-slider defaultvalue="50" showtips suffix="km"></c-slider>

```html
<c-slider defaultvalue="30" showtips prefix="$"></c-slider>
<c-slider defaultvalue="50" showtips prefix="value:"></c-slider>
<c-slider defaultvalue="30" showtips suffix="%"></c-slider>
<c-slider defaultvalue="50" showtips suffix="km"></c-slider>
```

JavaScript操作`set`

```js
slider.prefix = '%';
slider.suffix = '$';
//原生属性操作
slider.setAttribute('prefix','$');
slider.setAttribute('suffix','%');
```

## 最小值`min`、最大值`max`、步长`step`

设置或返回滑块条的`min`和`max`属性值。默认值分别为`0`和`100`。

设置或返回滑块条的`step`属性值。默认值为`1`。

<c-slider defaultvalue="50" min="0" max="100" step="10" id="c-slider-step" showtips></c-slider>
<c-input style="width:100px" label="min" type="number" min="-100" max="100" onchange="document.getElementById('c-slider-step').min=this.value;" defaultvalue="0"></c-input>
<c-input style="width:100px" label="max" type="number" min="1" max="300" onchange="document.getElementById('c-slider-step').max=this.value;" defaultvalue="100"></c-input>
<c-input style="width:100px" label="step" type="number" min="1" max="50" onchange="document.getElementById('c-slider-step').step=this.value;" defaultvalue="10"></c-input>

```html
<c-slider defaultvalue="30" min="0" max="100" step="5" showtips></c-slider>
```

JavaScript操作`get`、`set`

```js
slider.step; //获取
slider.step = 10;
//原生属性操作
slider.getAttribute('step');
slider.setAttribute('step',10);
```

## 垂直滑动条`vertical`

添加`vertical`属性可以垂直展示

<c-slider vertical showtips defaultvalue="10"></c-slider>
<c-slider vertical showtips defaultvalue="50"></c-slider>

```html
<c-slider vertical showtips defaultvalue="50"></c-slider>
```

默认高度为`300px`，宽度为`20px`，可以使用`CSS`修改

```css
slider{
    width:50px;
    height:150px;
}
```

<c-slider style="width:50px;height:150px;" vertical showtips defaultvalue="10"></c-slider>
<c-slider style="width:50px;height:150px;" vertical showtips defaultvalue="50"></c-slider>

## 值`value`

设置或返回滑块条的`value`属性值。
该属性值在`c-slider`标签上不可见。

<c-slider showtips></c-slider>
<c-button type="primary" onclick="this.previousElementSibling.value=50">设置value为50</c-button>
<c-button type="primary" onclick="CMessage.info('当前value: '+this.previousElementSibling.previousElementSibling.value)">显示当前value</c-button>

JavaScript操作`get`、`set`

```js
slider.value; //获取
slider.value = 50;
//原生属性操作
slider.getAttribute('value');
slider.setAttribute('value',50);
```

## 事件`event`

该组件暴露了常见的回调事件

### onchange

滑动条在滑动完成时触发。

<c-slider onchange="CMessage.info('当前value: '+this.value)"></c-slider>

```html
<c-slider onchange="CMessage.info('当前value: '+this.value)"></c-slider>
```

其他触发方式

```js
slider.onchange = function(ev){
    //获取value的几种方式
    /*
    event:{
        detail:{
            value,
        }
    }
    */
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

slider.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

### oninput

滑动条在滑动时触发。

<c-slider oninput="CMessage.info('当前value: '+this.value)"></c-slider>

```html
<c-slider oninput="fn(event)"></c-slider>
```

```js
slider.oninput = function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
}

slider.addEventListener('input',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail.value);
})
```

### onfocus、onblur

`focus`、`blur`后的回调事件。

与[`c-button`](c-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，支持方向键。

现支持鼠标滚轮操作，滚动速率是`step`的`5`倍，也就是说，如果`step`是`1`，那么每次滚动会增加（或减少）`5`

<c-slider onfocus="CMessage.info('focus')" onchange="CMessage.info(this.value)"></c-slider>
<c-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</c-button>

```js
slider.focus();
```
