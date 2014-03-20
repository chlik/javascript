#HTML DOM 日记
参考手册：http://www.w3school.com.cn/htmldom/index.asp

##属性:
1. attributes     存储节点的属性列表(只读)
2. childNodes     存储节点的子节点列表(只读)
3. dataType     返回此节点的数据类型
4. definition     以DTD或XML模式给出的节点的定义(只读)
5. doctype     指定文档类型节点(只读)
6. documentElement     返回文档的根元素(可读写)
7. firstChild     返回当前节点的第一个子节点(只读)
8. Implementation     返回XMLDOMImplementation对象
9. lastChild     返回当前节点最后一个子节点(只读)
10. nextSibling     返回当前节点的下一个兄弟节点(只读)
11. nodeName     返回节点的名字(只读)
12. nodeType     返回节点的类型(只读)
13. nodeTypedValue     存储节点值(可读写)
14. nodeValue     返回节点的文本(可读写)
15. ownerDocument     返回包含此节点的根文档(只读)
16. parentNode     返回父节点(只读)
17. Parsed     返回此节点及其子节点是否已经被解析(只读)
18. Prefix     返回名称空间前缀(只读)
19. preserveWhiteSpace     指定是否保留空白(可读写)
20. previousSibling     返回此节点的前一个兄弟节点(只读)
21. innerText     返回此节点及其后代的文本内容(可读写)
22. url     返回最近载入的XML文档的URL(只读)
23. Xml     返回节点及其后代的XML表示(只读)

##方法:
1. appendChild     为当前节点添加一个新的子节点,放在最后的子节点后
2. cloneNode     返回当前节点的拷贝
3. createAttribute     创建新的属性
4. createCDATASection     创建包括给定数据的CDATA段
5. createComment     创建一个注释节点
6. createDocumentFragment     创建DocumentFragment对象
7. createElement     创建一个元素节点
8. createEntityReference     创建EntityReference对象
9. createNode     创建给定类型,名字和命名空间的节点
10. createPorcessingInstruction     创建操作指令节点
11. createTextNode     创建包括给定数据的文本节点
12. getElementsByTagName     返回指定名字的元素集合
13. hasChildNodes     返回当前节点是否有子节点

###14. insertBefore
在指定节点前插入子节点
```html
插入之前
<div id="a">
    <div id="b"></div>
</div>
插入之后
<div id="a">
    <div id="c"></div>
    <div id="b"></div>
</div>
```
```javascript
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.createElement('div');
c.id='c';
a.insertBefore(c, b);
```
15. Load     导入指定位置的XML文档
16. loadXML     导入指定字符串的XML文档
17. removeChild     从子结点列表中删除指定的子节点
18. replaceChild     从子节点列表中替换指定的子节点
19. Save     把XML文件存到指定节点
20. selectNodes     对节点进行指定的匹配,并返回匹配节点列表
21. selectSingleNode     对节点进行指定的匹配,并返回第一个匹配节点
22. transformNode     使用指定的样式表对节点及其后代进行转换
23. transformNodeToObject     使用指定的样式表将节点及其后代转换为对象

