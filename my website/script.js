console.log("script running...")
document.querySelector('.cross').style.display = 'none'
document.querySelector('.humburger').addEventListener("click", () => {
    document.querySelector('.sidebarGo').classList.toggle('sidebarGO')
    if (document.querySelector('.sidebarGo').classList.contains('sidebarGO')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {

            document.querySelector('.cross').style.display = 'inline'
        }, 400);
    }
})