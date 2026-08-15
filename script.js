const menu = {
  pizza: [
    ['Pizzarium Special', ['R 620', 'M 1080', 'L 1480']], ['Chicago Delight', ['R 620', 'M 1080', 'L 1480']], ['Chicken Supreme', ['R 620', 'M 1080', 'L 1480']], ['Chicken Fajita', ['R 620', 'M 1080', 'L 1480']], ['Chicken Tikka', ['R 620', 'M 1080', 'L 1480']], ['Chicken Mughalai', ['R 620', 'M 1080', 'L 1480']], ['Chicken Euro', ['R 620', 'M 1080', 'L 1480']], ['Cheese Lover', ['R 620', 'M 1080', 'L 1480']], ['Behari Chicken', ['M 1150', 'L 1600']], ['Royal Crust', ['M 1150', 'L 1600']], ['Malai Raja', ['R 620', 'M 1120', 'L 1600']], ['Peri Peri', ['R 620', 'M 1120', 'L 1600']], ['Cheese Stuffer', ['M 1250', 'L 1750']], ['Kabab Stuffer', ['M 1300', 'L 1800']]
  ],
  sides: [['BBQ Chicken Wings (6 pcs)', ['PKR 330']], ['BBQ Chicken Wings (12 pcs)', ['PKR 620']], ['Masala Chicken Wings (6 pcs)', ['PKR 330']], ['Masala Chicken Wings (12 pcs)', ['PKR 620']], ['Behari Spin Roll (4 pcs)', ['PKR 650']], ['BBQ Chicken Spin Roll (4 pcs)', ['PKR 650']], ['Chicken Cheese Stick', ['PKR 450']]],
  pasta: [['Alfredo Pasta', ['PKR 650']], ['Pizzarium Chicken Pasta', ['PKR 650']], ['Flaming Pasta', ['PKR 650']]],
  drinks: [['Soft Drink 345ml', ['PKR 100']], ['Mineral Water (S)', ['PKR 80']], ['Soft Drink 500ml', ['PKR 120']], ['Mineral Water (L)', ['PKR 120']], ['Soft Drink 1.5 ltr', ['PKR 220']], ['Dip Sauce', ['PKR 60']]]
};
const grid = document.querySelector('#menuGrid');
function render(category) {
  grid.innerHTML = menu[category].map(([name, prices], index) => `<article class="menu-card" style="animation-delay:${index * 35}ms"><span class="card-number">${String(index + 1).padStart(2, '0')}</span><h3>${name}</h3><div class="price-row">${prices.map(price => { const [size, amount] = price.split(' '); return `<span class="price"><small>${amount === undefined ? '' : size}</small>${amount ?? size}</span>` }).join('')}</div></article>`).join('');
}
render('pizza');
document.querySelectorAll('.menu-tabs button').forEach(button => button.addEventListener('click', () => { document.querySelector('.menu-tabs .active').classList.remove('active'); button.classList.add('active'); render(button.dataset.category); }));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav').classList.toggle('mobile-open'));
