(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(26)},19:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(9),s=t.n(n),m=(t(19),t(4)),i=t(2);const o=Object(l.createContext)(),c=e=>{let{children:a}=e;const[t,n]=Object(l.useState)({firstName:"",lastName:"",streetAddress:"",unitNumber:"",city:"",state:"",zipCode:"",garageSize:"",floorStyle:"",existingCoating:!1,silicaSand:!1,floorCondition:"",garageStepCoating:!1,installationDate1:"",installationDate2:"",stemTreatment:"",email:"",phone:""});return r.a.createElement(o.Provider,{value:{formData:t,updateFormData:(e,a)=>{n(t=>({...t,[e]:a}))},calculateFinalQuote:()=>{let e=0;return"2 Car Garage"===t.garageSize?e=2200:"3 Car Garage"===t.garageSize?e=3200:"4 Car Garage"===t.garageSize&&(e=4200),t.existingCoating&&("2 Car Garage"===t.garageSize?e+=300:"3 Car Garage"===t.garageSize?e+=450:"4 Car Garage"===t.garageSize&&(e+=600)),t.silicaSand&&("2 Car Garage"===t.garageSize?e+=50:"3 Car Garage"===t.garageSize?e+=100:"4 Car Garage"===t.garageSize&&(e+=150)),t.stemTreatment&&"none"!==t.stemTreatment&&("2 Car Garage"===t.garageSize?e+=120:"3 Car Garage"===t.garageSize?e+=280:"4 Car Garage"===t.garageSize&&(e+=440)),"Medium Damage"===t.floorCondition?"2 Car Garage"===t.garageSize?e+=50:"3 Car Garage"===t.garageSize?e+=100:"4 Car Garage"===t.garageSize&&(e+=150):"Heavy Damage"===t.floorCondition&&("2 Car Garage"===t.garageSize?e+=120:"3 Car Garage"===t.garageSize?e+=180:"4 Car Garage"===t.garageSize&&(e+=240)),t.garageStepCoating&&(e+=175),e}}},a)};var p=e=>{let{nextPath:a,prevPath:t,isLastStep:l,onNext:n}=e;const s=Object(i.o)();return r.a.createElement("div",{className:"form-navigation"},t&&r.a.createElement("button",{onClick:()=>s(t)},"Back"),a&&r.a.createElement("button",{onClick:()=>{n?n()&&s(a):s(a)}},l?"Get Quote Now!":"Continue"))};var g=e=>{let{currentStep:a,totalSteps:t}=e;const l=a/t*100;return r.a.createElement("div",{className:"progress-bar"},r.a.createElement("div",{className:"progress-bar-fill",style:{width:`${l}%`}}))};var u=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o),[m,i]=Object(l.useState)({});return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Basic Information"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",value:n.firstName,onChange:e=>{s("firstName",e.target.value),""!==e.target.value.trim()&&i(e=>({...e,firstName:""}))}}),m.firstName&&r.a.createElement("span",{className:"error-message"},m.firstName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",value:n.lastName,onChange:e=>{s("lastName",e.target.value),""!==e.target.value.trim()&&i(e=>({...e,lastName:""}))}}),m.lastName&&r.a.createElement("span",{className:"error-message"},m.lastName))),r.a.createElement(p,{nextPath:"/step2",onNext:()=>!!(()=>{const e={};return n.firstName.trim()||(e.firstName="First Name is required"),n.lastName.trim()||(e.lastName="Last Name is required"),i(e),0===Object.keys(e).length})()}))};var d=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o),[m,i]=Object(l.useState)({});return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Enter your address..."),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Street Address:"),r.a.createElement("input",{type:"text",value:n.streetAddress,onChange:e=>{s("streetAddress",e.target.value),""!==e.target.value.trim()&&i(e=>({...e,streetAddress:""}))}}),m.streetAddress&&r.a.createElement("span",{className:"error-message"},m.streetAddress)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"City:"),r.a.createElement("input",{type:"text",value:n.city,onChange:e=>{s("city",e.target.value),""!==e.target.value.trim()&&i(e=>({...e,city:""}))}}),m.city&&r.a.createElement("span",{className:"error-message"},m.city)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"State:"),r.a.createElement("input",{type:"text",value:n.state,onChange:e=>{s("state",e.target.value),""!==e.target.value.trim()&&i(e=>({...e,state:""}))}}),m.state&&r.a.createElement("span",{className:"error-message"},m.state)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"ZIP Code:"),r.a.createElement("input",{type:"text",value:n.zipCode,onChange:e=>{s("zipCode",e.target.value),""!==e.target.value.trim()&&i(e=>({...e,zipCode:""}))}}),m.zipCode&&r.a.createElement("span",{className:"error-message"},m.zipCode))),r.a.createElement(p,{prevPath:"/",nextPath:"/step2-5",onNext:()=>!!(()=>{const e={};return n.streetAddress.trim()||(e.streetAddress="Street Address is required"),n.city.trim()||(e.city="City is required"),n.state.trim()||(e.state="State is required"),n.zipCode.trim()||(e.zipCode="ZIP Code is required"),i(e),0===Object.keys(e).length})()}))};var E=e=>{let{currentStep:a,totalSteps:t}=e;const{updateFormData:n}=Object(l.useContext)(o),[s,m]=Object(l.useState)(""),[i,c]=Object(l.useState)(""),u=e=>{m(e),n("garageSize",e),c("")};return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Select Your Garage Size"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Select the size of your garage:"),r.a.createElement("div",{className:"custom-select-grid"},r.a.createElement("div",{className:`custom-select-option ${"2 Car Garage"===s?"selected":""}`,onClick:()=>u("2 Car Garage")},"2 Car Garage"),r.a.createElement("div",{className:`custom-select-option ${"3 Car Garage"===s?"selected":""}`,onClick:()=>u("3 Car Garage")},"3 Car Garage"),r.a.createElement("div",{className:`custom-select-option ${"4 Car Garage"===s?"selected":""}`,onClick:()=>u("4 Car Garage")},"4 Car Garage")),i&&r.a.createElement("span",{className:"error-message"},i))),r.a.createElement(p,{prevPath:"/step2",nextPath:"/step3",onNext:()=>!(!s&&(c("Please select a garage size."),1))}))};var v=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o),[m,i]=Object(l.useState)(""),c=[{value:"Bambi",label:"Bambi",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Bambi.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Bambi_preview.jpg"},{value:"Cabin Fever",label:"Cabin Fever",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Cabin_Fever.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/CabinFever_preview.jpg"},{value:"Coyote",label:"Coyote",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Coyote.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Coyote_preview.jpg"},{value:"Domino",label:"Domino",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Domino.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Domino_preview.jpg"},{value:"Gravel",label:"Gravel",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Gravel.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Gravel_preview.jpg"},{value:"Raven",label:"Raven",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Raven.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Raven_preview.jpg"},{value:"Safari",label:"Safari",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Safari.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Safari_preview.jpg"},{value:"Tidal Wave",label:"Tidal Wave",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Tidal_Wave.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/TidalWave_preview.jpg"},{value:"Wombat",label:"Wombat",image:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Wombat.png",preview:"https://autosnap.github.io/legacyindustrialcoatings_form/images/Wombat_preview.jpg"}];return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Choose your style..."),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Select a floor flake style:"),r.a.createElement("div",{className:"custom-select-grid"},c.map(e=>r.a.createElement("div",{key:e.value,className:`custom-select-option ${e.value===n.floorStyle?"selected":""}`,onClick:()=>(e=>{const a=c.find(a=>a.value===e);s("floorStyle",e),s("imagePreview",a?a.preview:""),i("")})(e.value)},r.a.createElement("img",{src:e.image,alt:e.label}),r.a.createElement("span",null,e.label)))),m&&r.a.createElement("span",{className:"error-message"},m)),n.imagePreview&&r.a.createElement("div",{className:"image-preview"},r.a.createElement("img",{src:n.imagePreview,alt:"Preview"}))),r.a.createElement(p,{prevPath:"/step2-5",nextPath:"/step4",onNext:()=>!(!n.floorStyle&&(i("Please select a floor flake style."),1))}))};var S=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o);return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Do you have an existing floor coating that needs to be removed?"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:n.existingCoating,onChange:e=>{s("existingCoating",e.target.checked)}}),r.a.createElement("span",{className:"slider"}))),r.a.createElement("div",{className:"image-field"},r.a.createElement("img",{src:"/images/existing_coating.jpg",alt:"Static"}))),r.a.createElement(p,{prevPath:"/step3",nextPath:"/step5"}))};var h=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o);return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Would you like to add our Silica Sand coating for better floor grip and safety?"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:n.silicaSand||!1,onChange:e=>{s("silicaSand",e.target.checked)}}),r.a.createElement("span",{className:"slider"}))),r.a.createElement("div",{className:"image-field"},r.a.createElement("img",{src:"/images/silicasand.jpg",alt:"Static"}))),r.a.createElement(p,{prevPath:"/step4",nextPath:"/step6"}))};var f=e=>{var a;let{currentStep:t,totalSteps:n}=e;const{formData:s,updateFormData:m}=Object(l.useContext)(o),[i,c]=Object(l.useState)(""),u=[{value:"No Damage",title:"No Damage",image:"/images/no_damage.jpg"},{value:"Medium Damage",title:"Medium Damage",image:"/images/medium_damage.jpg"},{value:"Heavy Damage",title:"Heavy Damage",image:"/images/heavy_damage.jpg"}],d=null===(a=u.find(e=>e.value===s.floorCondition))||void 0===a?void 0:a.image;return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:t,totalSteps:n}),r.a.createElement("h1",null,"Choose the condition of your current floor..."),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Select an Option:"),r.a.createElement("div",{className:"options-row"},u.map(e=>r.a.createElement("div",{key:e.value,className:`option ${e.value===s.floorCondition?"selected":""}`,onClick:()=>(e=>{m("floorCondition",e),c("")})(e.value)},r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("span",null,e.title)))),i&&r.a.createElement("span",{className:"error-message"},i)),d&&r.a.createElement("div",{className:"image-preview"},r.a.createElement("img",{src:d,alt:"Preview"}))),r.a.createElement(p,{prevPath:"/step5",nextPath:"/step7",onNext:()=>!(!s.floorCondition&&(c("Please select the condition of your current floor."),1))}))};var N=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o);return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Would you like to include garage floor step coating?"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:n.garageStepCoating||!1,onChange:e=>{s("garageStepCoating",e.target.checked)}}),r.a.createElement("span",{className:"slider"}))),r.a.createElement("div",{className:"image-field"},r.a.createElement("img",{src:"/images/steps.jpg",alt:"Static"}))),r.a.createElement(p,{prevPath:"/step6",nextPath:"/step8"}))};var C=e=>{var a;let{currentStep:t,totalSteps:n}=e;const{formData:s,updateFormData:m}=Object(l.useContext)(o),[i,c]=Object(l.useState)(""),u=[{value:"none",title:"No Stem Treatment",image:"/images/no_vertical.jpeg"},{value:"standard",title:'Standard 2-4" Treatment',image:"/images/base.jpg"},{value:"tall",title:"Tall Stem Treatment",image:"/images/stem.jpg"}],d=null===(a=u.find(e=>e.value===s.stemTreatment))||void 0===a?void 0:a.image;return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:t,totalSteps:n}),r.a.createElement("h1",null,"What kind of vertical wall stem treatment would you like?"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Select an Option:"),r.a.createElement("div",{className:"options-row"},u.map(e=>r.a.createElement("div",{key:e.value,className:`option ${e.value===s.stemTreatment?"selected":""}`,onClick:()=>(e=>{m("stemTreatment",e),c("")})(e.value)},r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("span",null,e.title)))),i&&r.a.createElement("span",{className:"error-message"},i)),d&&r.a.createElement("div",{className:"image-preview"},r.a.createElement("img",{src:d,alt:"Preview"}))),r.a.createElement(p,{prevPath:"/step7",nextPath:"/step8-5",onNext:()=>!(!s.stemTreatment&&(c("Please select a stem treatment option."),1))}))},b=t(7);t(20);var y=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s}=Object(l.useContext)(o),[m,i]=Object(l.useState)(!1),[c,u]=Object(l.useState)(!1),[d,E]=Object(l.useState)(""),v=new Date;v.setDate(v.getDate()+7);const S=e=>e?e.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):"";return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Select Your Installation Date Preferences"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Installation Date Preference 1:"),r.a.createElement("input",{type:"text",value:S(n.installationDate1),onClick:()=>i(!m),readOnly:!0,placeholder:"Click to select a date"}),m&&r.a.createElement("div",{className:"calendar-popup"},r.a.createElement(b.a,{onChange:e=>{s("installationDate1",e),i(!1),E("")},value:n.installationDate1||null,minDate:v}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Installation Date Preference 2:"),r.a.createElement("input",{type:"text",value:S(n.installationDate2),onClick:()=>u(!c),readOnly:!0,placeholder:"Click to select a date"}),c&&r.a.createElement("div",{className:"calendar-popup"},r.a.createElement(b.a,{onChange:e=>{s("installationDate2",e),u(!1),E("")},value:n.installationDate2||null,minDate:v}))),d&&r.a.createElement("span",{className:"error-message"},d)),r.a.createElement(p,{prevPath:"/step8",nextPath:"/step9",onNext:()=>!!(n.installationDate1&&n.installationDate2||(E("Please select both installation date preferences."),0))}))},D=t(10);var x=e=>{let{currentStep:a,totalSteps:t}=e;const{formData:n,updateFormData:s,calculateFinalQuote:m}=Object(l.useContext)(o),[c,u]=Object(l.useState)(""),d=Object(i.o)();return r.a.createElement("div",{className:"form-page"},r.a.createElement(g,{currentStep:a,totalSteps:t}),r.a.createElement("h1",null,"Last step to get your quote!"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",value:n.email,onChange:e=>{s("email",e.target.value),e.target.value&&u("")},required:!0}),c&&r.a.createElement("span",{className:"error-message"},c)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone:"),r.a.createElement("input",{type:"tel",value:n.phone,onChange:e=>{s("phone",e.target.value)}}))),r.a.createElement(p,{prevPath:"/step8",nextPath:"/completion",isLastStep:!0,onNext:()=>{if(!n.email&&(u("Email is required."),1))return;const e=m(),a={firstName:n.firstName||"N/A",lastName:n.lastName||"N/A",email:n.email||"N/A",phone:n.phone||"N/A",streetAddress:n.streetAddress||"N/A",city:n.city||"N/A",state:n.state||"N/A",zipCode:n.zipCode||"N/A",garageSize:n.garageSize||"N/A",existingCoating:n.existingCoating||!1,floorStyle:n.floorStyle||"N/A",silicaSand:n.silicaSand||!1,stemTreatment:n.stemTreatment||"N/A",floorCondition:n.floorCondition||"N/A",garageStepCoating:n.garageStepCoating||!1,installationDate1:n.installationDate1||"N/A",installationDate2:n.installationDate2||"N/A",finalQuote:e};console.log("Template Params:",a),D.a.send("service_tnhfzqo","template_4sme2px",a,"iYRtAfT5N99Oi_ETl").then(e=>{console.log("SUCCESS!",e.status,e.text),alert("Your quote has been sent to your email!"),d("/completion")}).catch(e=>{console.log("FAILED...",e),alert("Failed to send quote. Please try again.")})}}))};t(25);var w=()=>{const{calculateFinalQuote:e,formData:a}=Object(l.useContext)(o),t=e();return r.a.createElement("div",{className:"completion-page"},r.a.createElement("h1",{className:"completion-title"},"Here is your offer!"),r.a.createElement("div",{className:"summary-card"},r.a.createElement("div",{className:"summary-header"},"Summary"),r.a.createElement("div",{className:"summary-content"},r.a.createElement("div",{className:"summary-item"},r.a.createElement("span",{className:"summary-value"},"$",t),r.a.createElement("span",{className:"summary-label"},"Total Cost")),r.a.createElement("div",{className:"date-summary"},r.a.createElement("div",{className:"date-item"},r.a.createElement("span",{className:"date-label"},"Preferred Installation Date 1:"),r.a.createElement("span",{className:"date-value"},a.installationDate1.toLocaleDateString())),r.a.createElement("div",{className:"date-item"},r.a.createElement("span",{className:"date-label"},"Preferred Installation Date 2:"),r.a.createElement("span",{className:"date-value"},a.installationDate2.toLocaleDateString())))),r.a.createElement("button",{className:"payment-button",onClick:()=>{window.location.href="https://buy.stripe.com/9AQ3eq5z34Hb8Ss8ww"}},"Proceed to Down Payment")))};var j=()=>{return r.a.createElement(c,null,r.a.createElement(m.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(u,{currentStep:1,totalSteps:11})}),r.a.createElement(i.a,{path:"/step2",element:r.a.createElement(d,{currentStep:2,totalSteps:11})}),r.a.createElement(i.a,{path:"/step2-5",element:r.a.createElement(E,{currentStep:3,totalSteps:11})}),r.a.createElement(i.a,{path:"/step3",element:r.a.createElement(v,{currentStep:4,totalSteps:11})}),r.a.createElement(i.a,{path:"/step4",element:r.a.createElement(S,{currentStep:5,totalSteps:11})}),r.a.createElement(i.a,{path:"/step5",element:r.a.createElement(h,{currentStep:6,totalSteps:11})}),r.a.createElement(i.a,{path:"/step6",element:r.a.createElement(f,{currentStep:7,totalSteps:11})}),r.a.createElement(i.a,{path:"/step7",element:r.a.createElement(N,{currentStep:8,totalSteps:11})}),r.a.createElement(i.a,{path:"/step8",element:r.a.createElement(C,{currentStep:9,totalSteps:11})}),r.a.createElement(i.a,{path:"/step8-5",element:r.a.createElement(y,{currentStep:10,totalSteps:11})}),r.a.createElement(i.a,{path:"/step9",element:r.a.createElement(x,{currentStep:11,totalSteps:11})}),r.a.createElement(i.a,{path:"/completion",element:r.a.createElement(w,null)}),r.a.createElement(i.a,{path:"*",element:r.a.createElement(u,{currentStep:1,totalSteps:11})})," ")))};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)))}},[[11,1,2]]]);
//# sourceMappingURL=main.d8e6f9c7.chunk.js.map