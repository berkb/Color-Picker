const colorList = [
    {
      name: "Güneş Batışı",
      colors: ['#FF5733', '#33FFA5', '#FFC300', '#A633FF', '#33B8FF']
    },
    {
      name: "Canlı Doğa",
      colors: ['#FF3333', '#33FF33', '#3333FF', '#FFFF33', '#FF33FF']
    },
    {
      name: "Pastel Rüya",
      colors: ['#FF9900', '#66CC00', '#0099CC', '#FF0099', '#CC00CC']
    },
    {
      name: "Gece Yıldızları",
      colors: ['#990000', '#006600', '#000099', '#999900', '#990099']
    },
    {
      name: "Yanardağ Patlaması",
      colors: ['#FF2400', '#FF9900', '#FFD700', '#FF5733', '#FF33FF']
    },
    {
      name: "Deniz Kızı Sedefleri",
      colors: ['#00CED1', '#20B2AA', '#5F9EA0', '#7FFFD4', '#40E0D0']
    },
    {
      name: "Ormanın Yankısı",
      colors: ['#228B22', '#008000', '#6B8E23', '#556B2F', '#2E8B57']
    },
    {
      name: "Gök Gürültüsü",
      colors: ['#483D8B', '#4169E1', '#6495ED', '#00BFFF', '#1E90FF']
    },
    {
      name: "Gün Batımı Serinliği",
      colors: ['#8A2BE2', '#9932CC', '#9400D3', '#800080', '#8B008B']
    },
    {
      name: "Sıcak Çöl Rüzgarı",
      colors: ['#D2B48C', '#F4A460', '#DEB887', '#CD853F', '#8B4513']
    },
    {
        name: "Yıldızlı Geceler",
        colors: ['#000080', '#0000FF', '#191970', '#00008B', '#4169E1']
      },
      {
        name: "Pastel Renkler",
        colors: ['#87CEEB', '#FFD700', '#98FB98', '#FFA07A', '#DDA0DD']
      },
      {
        name: "Serin Deniz Rüzgarı",
        colors: ['#00CED1', '#20B2AA', '#5F9EA0', '#7FFFD4', '#40E0D0']
      },
      {
        name: "Doğanın Güzellikleri",
        colors: ['#228B22', '#008000', '#8FBC8F', '#2E8B57', '#6B8E23']
      },
      {
        name: "Rüya Gibi Renkler",
        colors: ['#FF00FF', '#FF69B4', '#9370DB', '#FF1493', '#800080']
      },
      {
        name: "Bahar Çiçekleri",
        colors: ['#FFD700', '#FF4500', '#00FF00', '#00FFFF', '#FF69B4']
      },
      {
        name: "Tropikal Tatlar",
        colors: ['#FF6347', '#20B2AA', '#FFA500', '#00FF7F', '#FF1493']
      },
      {
        name: "Gece Gökyüzü",
        colors: ['#191970', '#000080', '#0000FF', '#7B68EE', '#483D8B']
      },
      {
        name: "Pastel Günbatımı",
        colors: ['#FFDAB9', '#FF6347', '#FFA07A', '#F08080', '#FF4500']
      },
      {
        name: "Mistik Orman",
        colors: ['#228B22', '#556B2F', '#9932CC', '#8A2BE2', '#2F4F4F']
      }
  ];
  
  function getColorName(hexColor) {
    if (hexColor === '#FF5733') return 'Sıcak Turuncu';
    if (hexColor === '#33FFA5') return 'Deniz Yeşili';
    if (hexColor === '#FFC300') return 'Canlı Sarı';
    if (hexColor === '#A633FF') return 'Gizemli Mor';
    if (hexColor === '#33B8FF') return 'Gök Mavisi';
    if (hexColor === '#FF3333') return 'Canlı Kırmızı';
    if (hexColor === '#33FF33') return 'Parlak Yeşil';
    if (hexColor === '#3333FF') return 'Gökyüzü Mavisi';
    if (hexColor === '#FFFF33') return 'Açık Sarı';
    if (hexColor === '#FF33FF') return 'Pembe';
    if (hexColor === '#FF9900') return 'Tavşan Turuncusu';
    if (hexColor === '#66CC00') return 'Limon Yeşili';
    if (hexColor === '#0099CC') return 'Havadar Mavi';
    if (hexColor === '#FF0099') return 'Parlak Pembe';
    if (hexColor === '#CC00CC') return 'Bordo';
    if (hexColor === '#990000') return 'Koyu Kırmızı';
    if (hexColor === '#006600') return 'Orman Yeşili';
    if (hexColor === '#000099') return 'Koyu Mavi';
    if (hexColor === '#999900') return 'Koyu Sarı';
    if (hexColor === '#990099') return 'Mor';
    if (hexColor === '#FF2400') return 'Ateş Kırmızısı';
    if (hexColor === '#FFD700') return 'Altın Sarısı';
    if (hexColor === '#20B2AA') return 'Hafif Mavi Yeşil';
    if (hexColor === '#7FFFD4') return 'Mercan Rengi';
    if (hexColor === '#40E0D0') return 'Turkuaz';
    if (hexColor === '#228B22') return 'Ormangülü Yeşili';
    if (hexColor === '#556B2F') return 'Koyu Zeytin Yeşili';
    if (hexColor === '#4169E1') return 'Orta Mavi';
    if (hexColor === '#6495ED') return 'Mavi Çiçek';
    if (hexColor === '#00BFFF') return 'Gök Mavisi';
    if (hexColor === '#483D8B') return 'Orkide Rengi';
    if (hexColor === '#9400D3') return 'Koyu Orkide';
    if (hexColor === '#800080') return 'Menekşe';
    if (hexColor === '#9932CC') return 'Orkide';
    if (hexColor === '#8A2BE2') return 'Fuşya';
    if (hexColor === '#F4A460') return 'Sarı Kahverengi';
    if (hexColor === '#DEB887') return 'Deniz Kabuğu';
    if (hexColor === '#CD853F') return 'Peru';
    if (hexColor === '#8B4513') return 'Deri';
    if (hexColor === '#000080') return 'Gece Mavisi';
    if (hexColor === '#0000FF') return 'Mavi';
    if (hexColor === '#191970') return 'Gece Mavisi';
    if (hexColor === '#00008B') return 'Koyu Mavi';
    if (hexColor === '#4169E1') return 'Orta Mavi';
    if (hexColor === '#87CEEB') return 'Gök Mavisi';
    if (hexColor === '#FFD700') return 'Altın Sarısı';
    if (hexColor === '#98FB98') return 'Soluk Yeşil';
    if (hexColor === '#FFA07A') return 'Ateş Pembesi';
    if (hexColor === '#DDA0DD') return 'Eflatun';
    if (hexColor === '#00CED1') return 'Açık Turkuaz';
    if (hexColor === '#20B2AA') return 'Hafif Mavi Yeşil';
    if (hexColor === '#7FFFD4') return 'Mercan Rengi';
    if (hexColor === '#40E0D0') return 'Turkuaz';
    if (hexColor === '#228B22') return 'Ormangülü Yeşili';
    if (hexColor === '#008000') return 'Orman Yeşili';
    if (hexColor === '#8FBC8F') return 'Kadife Yeşili';
    if (hexColor === '#2E8B57') return 'Deniz Yeşili';
    if (hexColor === '#6B8E23') return 'Zeytin Yeşili';
    if (hexColor === '#FF00FF') return 'Magenta';
    if (hexColor === '#FF69B4') return 'Soluk Pembe';
    if (hexColor === '#9370DB') return 'Orkide Rengi';
    if (hexColor === '#FF1493') return 'Derin Pembe';
    if (hexColor === '#800080') return 'Menekşe';
    if (hexColor === '#FF6347') return 'Turuncu Kırmızı';
    if (hexColor === '#FFA500') return 'Turuncu';
    if (hexColor === '#00FF00') return 'Yeşil';
    if (hexColor === '#00FFFF') return 'Açık Mavi';
    if (hexColor === '#FF4500') return 'Oranj';
    if (hexColor === '#20B2AA') return 'Hafif Mavi Yeşil';
    if (hexColor === '#7FFFD4') return 'Mercan Rengi';
    if (hexColor === '#FF1493') return 'Derin Pembe';
    if (hexColor === '#800080') return 'Menekşe';
    if (hexColor === '#FF6347') return 'Turuncu Kırmızı';
    if (hexColor === '#FFA500') return 'Turuncu';
    if (hexColor === '#00FF00') return 'Yeşil';
    if (hexColor === '#00FFFF') return 'Açık Mavi';
    if (hexColor === '#FF4500') return 'Oranj';
    if (hexColor === '#7B68EE') return 'Orta Mavi';
    if (hexColor === '#483D8B') return 'Orkide Rengi';
    if (hexColor === '#FFDAB9') return 'Soluk Mercan';
    if (hexColor === '#F08080') return 'Açık Kırmızı';
    if (hexColor === '#9932CC') return 'Orkide';
    if (hexColor === '#8A2BE2') return 'Fuşya';
    if (hexColor === '#2F4F4F') return 'Koyu Kurşuni';
    return 'Bilinmeyen Renk';
  }
  
  const colorListContainer = document.createElement('div');
  colorListContainer.className = 'color-list-container';
  
  colorList.forEach(list => {
    const listContainer = document.createElement('div');
    listContainer.className = 'list-container';
  
    const title = document.createElement('h2');
    title.textContent = list.name;
    listContainer.appendChild(title);
  
    const colors = list.colors;
  
    const colorList = document.createElement('div');
    colorList.className = 'color-list';
  
    colors.forEach(color => {
      const colorDiv = document.createElement('div');
      colorDiv.className = 'color';
      colorDiv.style.backgroundColor = color;
  
      const colorName = getColorName(color);
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.textContent = `${colorName} (Kopyalandı)`;
      colorDiv.appendChild(popup);
  
      colorDiv.addEventListener('click', () => {
        copyToClipboard(color);
        popup.style.display = 'block';
        setTimeout(() => {
          popup.style.display = 'none';
        }, 1000);
      });
  
      colorList.appendChild(colorDiv);
    });
  
    listContainer.appendChild(colorList);
    colorListContainer.appendChild(listContainer);
  });
  
  document.body.appendChild(colorListContainer);
  
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  