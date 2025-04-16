
/* Add custom Js code below */ 

  const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'items-center', 'justify-start', 'w-1/3');
    
    
    const brandElement = document.querySelector('.navbar-brand.p-1').parentElement;
    const menuButton = document.querySelector('.mburger.mburger--collapse.flex.items-start.me-1').parentElement;
    const searchButton = document.querySelector('.search-btn.header-btn.flex.da-fm').parentElement;
    const langButton = document.querySelector('.lang.text-lg.btn.basis-0.da-tm').parentElement;

    
   newDiv.appendChild(langButton);    
    newDiv.appendChild(searchButton);  newDiv.appendChild(brandElement);
   newDiv.appendChild(menuButton);


    
    const containerS = document.querySelector('.flex.items-stretch.justify-between.relative');
    containerS.insertBefore(newDiv , containerS.firstChild);
   



    
    const searchBtn = document.querySelector('.search-btn.header-btn.flex.da-fm');
    const headerButtons = document.querySelector('.header-buttons.hidden.lg\\:block');

    
    const container = headerButtons.parentElement;

    
    container.insertBefore(searchBtn, headerButtons);




    setTimeout(function() {
        const tamaraWidget = document.querySelector('.tamara-product-widget');
        
        const newDiv = document.createElement('div');
          newDiv.classList.add('dman')
        newDiv.innerHTML = `<p style="color: red;">ضمان لمدة عام كامل من شركة بن حارب التجارية المسجلة في وزارة التجارة بالمملكة السعودية 🇸🇦 رقم التسجيل : 0000120064</p>`;
        
       
        tamaraWidget.insertAdjacentElement('afterend', newDiv);
    }, 1000); 
