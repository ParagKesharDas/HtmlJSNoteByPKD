
//callBack

function getTwonumbersAndAdd(num1, num2, onSuccess, onFail) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        onSuccess(num1, num2);//callback
    } else {
        onFail();//callback
    }
}


// getTwonumbersAndAdd("4",4,(num1,num2)=>{
//     console.log(num1+num2);//callback for onSuccess
// },()=>{
//     console.log("failed")//callback for onFail
// });

function onSuccess(num1, num2) {
    console.log(num1 + num2);//callback for onSuccess
}
function onFail() {
    console.log("failed")//callback for onFail
}

getTwonumbersAndAdd("4", 4, onSuccess, onFail);



//asyncronus Callback

const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")
//callbaxck hell

// setTimeout(()=>{
//     head1.textContent="one";
//     head1.style.color="blue";
//     setTimeout(()=>{
//         head2.textContent="two";
//         head2.style.color="green";
//         setTimeout(()=>{
//             head3.textContent="three";
//             head3.style.color="yellow";
//             setTimeout(()=>{
//                 head4.textContent="four";
//                 head4.style.color="orange";
//                 setTimeout(()=>{
//                     head5.textContent="five";
//                     head5.style.color="red";
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)

function changeColor(head, nam, color, time, onSuccess1, onFail1) {
    setTimeout(() => {
        if (head) {
            head.textContent = nam;
            head.style.color = color;
            if (onSuccess1) {
                onSuccess1();
            }
        }
        else { 
            if (onFail1) {
                onFail1();
            }
        }
    }, time);
}

function onSuccess1(head, nam, color, time, onSuccess1, onFail1) {
    changeColor(head, nam, color, time, onSuccess1, onFail1);
}

function onFail1() {
    console.log("Your Head does not exest")
}


// changeColor(head1, "one", "red", 1000,onSuccess1())
//peramid of domes
changeColor(head1, "one", "red", 1000,
    onSuccess1(head2, "two", "green", 2000,
        onSuccess1(head3, "three", "blue", 2000,
            onSuccess1(head4, "four", "brown", 1000,
                onSuccess1(head5, "five", "pink", 2000,onSuccess1(),
                    ),
                ),
            ),
        ),
    )

