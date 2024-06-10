document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    {
      year: "1987",
      title: "Born to Mack",
      tracks: [
        { title: "Partytime", url: "https://cryptostream.tech/ts/0001_too_short_1987_born_to_mack_01_Partytime.mp3" },
        { title: "Mack Attack", url: "https://cryptostream.tech/ts/0002_too_short_1987_born_to_mack_02_Mack_Attack.mp3" },
        { title: "Playboy Short II", url: "https://cryptostream.tech/ts/0003_too_short_1987_born_to_mack_03_Playboy_short_II.mp3" },
        { title: "Freaky Tales", url: "https://cryptostream.tech/ts/0004_too_short_1987_born_to_mack_05_Freaky_Tales.mp3" },
        { title: "Dope Fiend Beat", url: "https://cryptostream.tech/ts/0005_too_short_1987_born_to_mack_06_Dope_Fiend_Beat.mp3" },
        { title: "Little Girls", url: "https://cryptostream.tech/ts/0006_too_short_1987_born_to_mack_07_Little_Girls.mp3" },
        { title: "The Universal Mix", url: "https://cryptostream.tech/ts/0007_too_short_1987_born_to_mack_08_The_Universal_Mix.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album01.jpg",
      price: 17000,
    },
    {
      year: "1988",
      title: "Life Is... Too Short",
      tracks: [
        { title: "Life Is... Too Short", url: "https://cryptostream.tech/ts/0009_too_short_1988_life_is_too_short_01_Life_Is_Too_Short.mp3" },
        { title: "Rhymes", url: "https://cryptostream.tech/ts/0010_too_short_1988_life_is_too_short_02_Rhymes.mp3" },
        { title: "I Ain't Trippin'", url: "https://cryptostream.tech/ts/0011_too_short_1988_life_is_too_short_03_I_Aint_Trippn.mp3" },
        { title: "Nobody Does It Better", url: "https://cryptostream.tech/ts/0012_too_short_1988_life_is_too_short_04_Nobody_Does_It_Better.mp3" },
        { title: "Oakland", url: "https://cryptostream.tech/ts/0013_too_short_1988_life_is_too_short_05_Oakland.mp3" },
        { title: "Don't Fight the Feelin'", url: "https://cryptostream.tech/ts/0014_too_short_1988_life_is_too_short_06_Dont_Fight_The_Feelin.mp3" },
        { title: "CussWords", url: "https://cryptostream.tech/ts/0015_too_short_1988_life_is_too_short_07_CussWords.mp3" },
        { title: "City of Dope", url: "https://cryptostream.tech/ts/0016_too_short_1988_life_is_too_short_08_City_of_Dope.mp3" },
        { title: "Pimp the Ho", url: "https://cryptostream.tech/ts/0017_too_short_1988_life_is_too_short_09_Pimp_the_Ho.mp3" },
        { title: "Outro", url: "https://cryptostream.tech/ts/0018_too_short_1988_life_is_too_short_10_Outro.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album02.jpg",
      price: 17000,
    },
    {
      year: "1990",
      title: "Short Dog's in the House",
      tracks: [
        {
          title: "Short Dog's In The House",
          url: "https://cryptostream.tech/ts/0020_too_short_1990_short_dogs_in_the_house_01_Short_Dogs_In_The_House.mp3",
        },
        { title: "It's Your Life", url: "https://cryptostream.tech/ts/0021_too_short_1990_short_dogs_in_the_house_02_Its_Your_Life.mp3" },
        { title: "The Ghetto", url: "https://cryptostream.tech/ts/0022_too_short_1990_short_dogs_in_the_house_03_The_Ghetto.mp3" },
        { title: "Short But Funky", url: "https://cryptostream.tech/ts/0023_too_short_1990_short_dogs_in_the_house_04_Short_But_Funky.mp3" },
        { title: "In The Oaktown", url: "https://cryptostream.tech/ts/0024_too_short_1990_short_dogs_in_the_house_05_In_The_Oaktown.mp3" },
        { title: "Dead Or Alive", url: "https://cryptostream.tech/ts/0025_too_short_1990_short_dogs_in_the_house_06_Dead_Or_Alive.mp3" },
        { title: "Punk Bitch", url: "https://cryptostream.tech/ts/0026_too_short_1990_short_dogs_in_the_house_07_Punk_Bitch.mp3" },
        {
          title: "Ain't Nothin' But A Word To Me (with Ice Cube)",
          url: "https://cryptostream.tech/ts/0027_too_short_1990_short_dogs_in_the_house_08_Aint_Nothin_But_A_Word_To_Me_with_Ice_Cube.mp3",
        },
        {
          title: "Hard On The Boulevard",
          url: "https://cryptostream.tech/ts/0028_too_short_1990_short_dogs_in_the_house_09_Hard_On_The_Boulevard.mp3",
        },
        { title: "Pimpology", url: "https://cryptostream.tech/ts/0029_too_short_1990_short_dogs_in_the_house_10_Pimpology.mp3" },
        { title: "Paula & Janet", url: "https://cryptostream.tech/ts/0030_too_short_1990_short_dogs_in_the_house_11_Paula_Janet.mp3" },
        { title: "Rap Like Me", url: "https://cryptostream.tech/ts/0031_too_short_1990_short_dogs_in_the_house_12_Rap_Like_Me.mp3" },
        { title: "The Ghetto (Reprise)", url: "https://cryptostream.tech/ts/0032_too_short_1990_short_dogs_in_the_house_13_The_GhettoReprise.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album03.jpg",
      price: 17000,
    },
    {
      year: "1992",
      title: "Shorty the Pimp",
      tracks: [
        { title: "Intro", url: "https://cryptostream.tech/ts/0034_too_short_1992_shorty_the_pimp_01_intro.mp3" },
        { title: "In The Trunk", url: "https://cryptostream.tech/ts/0035_too_short_1992_shorty_the_pimp_02_in_the_trunk.mp3" },
        {
          title: "I Ain't Nothin' But A Dog",
          url: "https://cryptostream.tech/ts/0036_too_short_1992_shorty_the_pimp_03_i_aint_nothing_but_a_dog.mp3",
        },
        { title: "Hoes", url: "https://cryptostream.tech/ts/0037_too_short_1992_shorty_the_pimp_04_hoes.mp3" },
        { title: "No Love From Oakland", url: "https://cryptostream.tech/ts/0038_too_short_1992_shorty_the_pimp_05_no_love_from_oakland.mp3" },
        { title: "I Want To Be Free", url: "https://cryptostream.tech/ts/0039_too_short_1992_shorty_the_pimp_06_i_want_to_be_free.mp3" },
        {
          title: "Hoochie (feat. Dwayne Wiggins)",
          url: "https://cryptostream.tech/ts/0040_too_short_1992_shorty_the_pimp_07_hoochie_feat_dwayne_wiggins.mp3",
        },
        { title: "Step Daddy", url: "https://cryptostream.tech/ts/0041_too_short_1992_shorty_the_pimp_08_step_daddy.mp3" },
        { title: "It Don't Stop", url: "https://cryptostream.tech/ts/0042_too_short_1992_shorty_the_pimp_09_it_dont_stop.mp3" },
        {
          title: "So You Wanna Be A Gangsta",
          url: "https://cryptostream.tech/ts/0043_too_short_1992_shorty_the_pimp_10_so_you_wanna_be_a_gangsta.mp3",
        },
        {
          title: "Something To Ride To (feat. Ant Banks & Pooh-Man)",
          url: "https://cryptostream.tech/ts/0044_too_short_1992_shorty_the_pimp_11_something_to_ride_to_feat_ant_banks_and_pooh_man.mp3",
        },
        { title: "Extra Special Thanks", url: "https://cryptostream.tech/ts/0045_too_short_1992_shorty_the_pimp_12_extra_special_thanks.mp3" },
      ],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album04.jpg",
      price: 17000,
    },
    {
      year: "1993",
      title: "Get In Where You Fit In",
      tracks: [{ title: "Don't Fight The Intro", url: "https://cryptostream.tech/ts/0047_too_short_1993_get_in_the_file_too_long_to_display" }],
      image: "https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album05.jpg",
      price: 17000,
    },
  ];

  const albumContainer = document.querySelector(".album-container");
  const totalCostElem = document.getElementById("total-cost");
  const checkoutButton = document.getElementById("checkout-button");
  const paymentModal = document.getElementById("my-qr-Modal");
  const addedItemsList = document.getElementById("added-items-list");

  let totalCost = 0;
  let cartItems = [];

  function displayAlbums(albumList) {
    albumContainer.innerHTML = "";
    albumList.forEach((album) => {
      const albumDiv = document.createElement("div");
      albumDiv.classList.add("album");
      albumDiv.innerHTML = `
              <img src="${album.image}" alt="${album.title}">
              <div class="album-name">${album.title}</div>
              <div class="album-year">${album.year}</div>
              <button class="add-to-cart">Add to cart</button>
          `;
      albumDiv.querySelector(".add-to-cart").addEventListener("click", () => addToCart(album));
      albumContainer.appendChild(albumDiv);
    });
  }

  function addToCart(album) {
    totalCost += album.price;
    cartItems.push(album);
    totalCostElem.textContent = `Total: ${totalCost} sats`;
    toggleCheckoutButton();
  }

  function toggleCheckoutButton() {
    checkoutButton.disabled = totalCost === 0;
  }

  checkoutButton.addEventListener("click", () => {
    addedItemsList.innerHTML = "";
    cartItems.forEach((item) => {
      const listItem = document.createElement("div");
      listItem.textContent = `${item.title} (${item.year}) - ${item.price} sats`;
      addedItemsList.appendChild(listItem);
    });
    $(paymentModal).modal("show");
  });

  // Initial call to disable the checkout button
  toggleCheckoutButton();

  displayAlbums(albums);
});
