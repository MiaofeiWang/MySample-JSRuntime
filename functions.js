!function(){"use strict";const t="products",e=268436224,i="en-US";CustomFunctions.associate("ADD",(function(t,e){return t+e})),CustomFunctions.associate("LOG",(function(t){return console.log(t),t})),CustomFunctions.associate("RETURNAFTERASYNCLATENCY",(function(t,e){let i=1e3*(2*Math.random()-1)+t;return new Promise((t=>{setTimeout((()=>{t(Math.floor(i))}),i)}))})),CustomFunctions.associate("GETPRODUCTBYID",(async function(o){return{type:"LinkedEntity",text:"Chai",id:{entityId:o,domainId:t,serviceId:e,culture:i}}})),CustomFunctions.associate("PRODUCTLINKEDENTITYSERVICE",(async function(o){const n=new CustomFunctions.Error(CustomFunctions.ErrorCode.notAvailable);console.log(`Fetching linked entity with id ${o} ...`);try{return function(o){const n={type:"LinkedEntity",text:"Chai",id:{entityId:o,domainId:t,serviceId:e,culture:i},properties:{"Product ID":{type:"String",basicValue:o.toString()},"Product Name":{type:"String",basicValue:"Chai"},"Quantity Per Unit":{type:"String",basicValue:"10 boxes x 20 bags"},"Unit Price":{type:"FormattedNumber",basicValue:18,numberFormat:"$* #,##0.00"},Discontinued:{type:"Boolean",basicValue:!1}},cardLayout:{title:{property:"Product Name"},sections:[{layout:"List",properties:["Product ID"]},{layout:"List",title:"Quantity and price",collapsible:!0,collapsed:!1,properties:["Quantity Per Unit","Unit Price"]},{layout:"List",title:"Additional information",collapsed:!0,properties:["Discontinued"]}]}};return n.properties.Image={type:"WebImage",address:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/320px-Masala_Chai.JPG"},n.cardLayout.mainImage={property:"Image"},n.properties.Category={type:"LinkedEntity",text:"Beverages",id:{entityId:"C1",domainId:"categories",serviceId:e,culture:i}},n.cardLayout.sections[0].properties.push("Category"),n.properties.Supplier={type:"LinkedEntity",text:"Exotic Liquids",id:{entityId:"S1",domainId:"suppliers",serviceId:e,culture:i}},n.cardLayout.sections[2].properties.push("Supplier"),n}(JSON.parse(o).entityId)}catch(t){throw console.error(t),n}}))}();
//# sourceMappingURL=functions.js.map