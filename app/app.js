const ctx = document.getElementById('lineChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Feb', 'Mar', 'Yellow', 'Apr', 'May', 'June', 'July'],
    datasets: [{
      label: 'WPPOOL',
      data: [-10, 20, 15,25,10,50,19,30,60,20,50,60],
      borderWidth: 1,
      borderColor:'#FC714D',
      backgroundColor:'#FC714D'
    },
    {
        label: 'Google',
        data: [-0, 10, -10,20,26,30,10,15,30,40,50,70],
        borderWidth: 1,
        borderColor:'#615DE3',
      backgroundColor:'#615DE3'
      },
    {
        label: 'Microsoft',
        data: [-10, 6, 5,14,25,31,36,51,60,65,60,70],
        borderWidth: 1,
        borderColor:'#7CA63A',
      backgroundColor:'#7CA63A'
      },
    {
        label: 'Twitter',
        data: [20, 10, 15,55,60,20,30,50,30,50,40,60],
        borderWidth: 1,
        borderColor:'#6F34A1',
      backgroundColor:'#6F34A1'
      },
]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



const menu = document.getElementById('menu')
const closemenu = document.getElementById('close')
const btn = document.getElementById('btn')
const share = document.getElementById('share')
const showmenu = document.getElementById('showmenu')

menu.addEventListener("click",()=>{
  menu.classList.remove('text-white')
  menu.classList.add('hidden','text-black')
  closemenu.classList.remove('hidden')
  showmenu.classList.remove('-right-96','opacity-0')
  showmenu.classList.add('right-2','opacity-100')
  // btn.classList.add(['bg-primary'])
  share.classList.add('bg-[#AFCD80]')
  // showmenu.classList.add('opacity-100')
  // showmenu.classList.remove('hidemenu')
  // showmenu.classList.remove('-right-96')
})

closemenu.addEventListener ("click",()=>{
  closemenu.classList.add('hidden')
  showmenu.classList.remove('right-2','opacity-100')
  showmenu.classList.add('-right-96','opacity-0')
  // btn.classList.remove(['bg-primary'])
  share.classList.remove(['bg-[#AFCD80]'])
  menu.classList.remove('hidden')
})