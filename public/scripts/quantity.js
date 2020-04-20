$(document).ready(function() {
  $('.quantity .increment').on('click', function() {

    let count = $(this).siblings("input");
    let n = Number(count.val());
    n += 1;
    count.val(n);

    //below code is for dynamically present the price changes when user hit plus button
    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total:";
    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price").text());
      // console.log(price);
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = (Number(total) + Number(tax)).toFixed(2);

    let subTotalOnScreenValue = $(".order-calculations").children("p")[0].innerText;
    subTotalOnScreenLocation.innerText = subTotalOnScreenValue + " $" + total;

    let taxesOnScreenValue = $(".order-calculations").children("p")[1].innerText;
    taxesOnScreenValueLocation.innerText = taxesOnScreenValue + " $" + tax;

    let totalOnScreenValue = $(".order-calculations").children("p")[2].innerText;
    totalOnScreenValueLocation.innerText = totalOnScreenValue + " $" + totalWithTax;
  });

  $('.quantity .decrement').on('click', function() {
    let count = $(this).parent().children("input");
    let n = Number(count.val());
    n -= 1;
    if (n < 0) {
      n = 0;
    }
    count.val(n);

    //below code is for dynamically present the price changes when user hit plus button
    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total:";
    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price").text());
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = (Number(total) + Number(tax)).toFixed(2);

    let subTotalOnScreenValue = $(".order-calculations").children("p")[0].innerText;
    subTotalOnScreenLocation.innerText = subTotalOnScreenValue + " $" + total;

    let taxesOnScreenValue = $(".order-calculations").children("p")[1].innerText;
    taxesOnScreenValueLocation.innerText = taxesOnScreenValue + " $" + tax;

    let totalOnScreenValue = $(".order-calculations").children("p")[2].innerText;
    totalOnScreenValueLocation.innerText = totalOnScreenValue + " $" + totalWithTax;
  });

  $("section.order-food-interface div.food-item div.quantity input").on('keyup', function() {
    let inputValue = $(this).val();
    if (!Number.isInteger(Number(inputValue))) {
      alert("Please input a integer amount for food quantities!")
    }

    //below code is for dynamically present the price changes when user hit plus button
    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total:";
    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price").text());
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = (Number(total) + Number(tax)).toFixed(2);

    let subTotalOnScreenValue = $(".order-calculations").children("p")[0].innerText;
    subTotalOnScreenLocation.innerText = subTotalOnScreenValue + " $" + total;

    let taxesOnScreenValue = $(".order-calculations").children("p")[1].innerText;
    taxesOnScreenValueLocation.innerText = taxesOnScreenValue + " $" + tax;

    let totalOnScreenValue = $(".order-calculations").children("p")[2].innerText;
    totalOnScreenValueLocation.innerText = totalOnScreenValue + " $" + totalWithTax;
  });

  $(".checkout-button").on("click", function(event) {
    // Now user has clicked sumbit so we need to retrieve values from Cart

    // We need to send those values to the server using Ajax
    // const formData = $(".subtotal").serialize();

    const foodObject = {}
    const foodNameArray = [];
    $(".food-name").each(function(index)  {
      if ($(this).siblings(".quantity").children("input").val() > 0)  {
        foodObject[$(this).text()] = $(this).siblings(".quantity").children("input").val();
        foodNameArray.push($(this).text());
      }
    })
    console.log(foodNameArray);

    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total:";
    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price").text());
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = (Number(total) + Number(tax)).toFixed(2);

    foodObject["subtotal"] = total;
    foodObject["taxes"] = tax;
    foodObject["total"] = totalWithTax;
    foodObject["orderedItems"] = foodNameArray;
    console.log(foodObject);

    foodNameArray.forEach(function(elements)  {
      $(".order-details").text($(".order-details").text() + " " + foodObject[elements] + " " + elements + " / ")
    })
    $(".modal-subtotal").text(foodObject["subtotal"]);
    $(".modal-taxes").text(foodObject["taxes"])
    $(".modal-total").text(foodObject["total"])

  })

  $(".close").on("click", function(event) {
    $(".order-details").text("")
    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total:";
    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price").text());
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = (Number(total) + Number(tax)).toFixed(2);

    let subTotalOnScreenValue = $(".order-calculations").children("p")[0].innerText;
    subTotalOnScreenLocation.innerText = subTotalOnScreenValue + " $" + total;

    let taxesOnScreenValue = $(".order-calculations").children("p")[1].innerText;
    taxesOnScreenValueLocation.innerText = taxesOnScreenValue + " $" + tax;

    let totalOnScreenValue = $(".order-calculations").children("p")[2].innerText;
    totalOnScreenValueLocation.innerText = totalOnScreenValue + " $" + totalWithTax;
  })



  $(".confirm").on("click", function(event) {
    const foodObject = {}
    const foodNameArray = [];
    $(".food-name").each(function(index)  {
      if ($(this).siblings(".quantity").children("input").val() > 0)  {
        foodObject[$(this).text()] = $(this).siblings(".quantity").children("input").val();
        foodNameArray.push($(this).text());
      }
    })
    console.log(foodNameArray);

    let subTotalOnScreenLocation = $(".order-calculations").children("p")[0];
    subTotalOnScreenLocation.innerText = "Subtotal:";
    let taxesOnScreenValueLocation = $(".order-calculations").children("p")[1];
    taxesOnScreenValueLocation.innerText = "Taxes:";
    let totalOnScreenValueLocation = $(".order-calculations").children("p")[2];
    totalOnScreenValueLocation.innerText = "Total:";
    //iterate the HTML with all divs named "food-item"
    let total = 0;
    $("section.order-food-interface div.food-item").each((index, element) => {
      let price = Number($(element).children(".price").text());
      let quantity = Number($(element).find("input").val());
      let singleTotal = price * quantity;
      total = total + singleTotal;
    });
    let tax = (total * 0.13).toFixed(2);
    let totalWithTax = (Number(total) + Number(tax)).toFixed(2);

    foodObject["subtotal"] = total.toString();
    foodObject["taxes"] = tax;
    foodObject["total"] = totalWithTax;
    foodObject["orderedItems"] = foodNameArray;
    foodObject["name"] = $(".name").val()
    foodObject["phone"] = $(".phone").val()

    console.log(foodObject);

    if(totalWithTax > 0)  {
      $.ajax({
        url:"http://localhost:8080/order",
        method: "POST",
        data: foodObject
      }).then(() => {
      })
    }
  })
})
