form3Btn.addEventListener("click", function(){
    const pdfGen = document.querySelector(".pdf-container");
    setTimeout(function(){
        form3Btn.addEventListener("click", function(){
            const opt = {
                margin:       0,
                filename:     `${formValues1[0]}_${formValues1[1]}.pdf`,
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 1 },
                jsPDF:        { 
                orientation: 'p',
                unit: 'in',
                format: 'a4',
            }
            };
    
            html2pdf().from(pdfGen).set(opt).save();
        });
    }, 1000)
})


