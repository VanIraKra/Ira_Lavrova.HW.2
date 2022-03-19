let a = "";
let b = "bbb";
let c = false;
let test1 = !b.length === c; // False (b и c имеют разные типы данных)
let test2 = a.length > b.length; // False (0 !> 3)
let test3 = !a.length && !b.length; // True (оператор и)
let test4 = a === c; // False (a и c имеют разные типы данных)