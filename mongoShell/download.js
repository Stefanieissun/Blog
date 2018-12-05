fetch(`https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg`)
    .then(a=>a.blob())
    .then(b=>{
        let a=document.createElement('a');
        a.href=URL.createObjectURL(b);
        a.download='2.svg';
        a.click();
        URL.revokeObjectURL(b);
    })