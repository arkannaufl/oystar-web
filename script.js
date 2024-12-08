// Smooth Scroll On Anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navbar
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('svg');

        button.addEventListener('click', () => {
            // Toggle FAQ yang diklik saja tanpa mempengaruhi yang lain
            item.classList.toggle('bg-[#F6F6F6]');
            content.classList.toggle('hidden');
            
            // Toggle rotasi icon
            if (content.classList.contains('hidden')) {
                icon.classList.add('rotate-180');
                icon.classList.remove('rotate-0');
            } else {
                icon.classList.remove('rotate-180');
                icon.classList.add('rotate-0');
            }
        });
    });
});

// Produk Slider Control
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('[class*="w-9/12 flex overflow-x-auto"]');
    const prevButton = document.querySelector('button svg[stroke="#999999"]').closest('button');
    const nextButton = document.querySelector('button svg[stroke="#343741"]').closest('button');
    const pageText = document.querySelector('p[class*="font-normal text-[#343741]"]');
    const cards = document.querySelectorAll('.w-72.rounded-2xl');
    
    let currentPage = 1;
    const cardsPerPage = 3;
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    
    // Update tampilan halaman
    function updatePageDisplay() {
        pageText.innerHTML = `<span class="text-[#FF652F]">${currentPage}</span> / ${totalPages}`;
    }

    // Fungsi scroll ke halaman tertentu
    function scrollToPage(page) {
        const cardWidth = cards[0].offsetWidth;
        const spacing = 28; // space-x-7 = 1.75rem = 28px
        const scrollAmount = (cardWidth + spacing) * ((page - 1) * cardsPerPage);
        productContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Event listener untuk tombol previous
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            scrollToPage(currentPage);
            updatePageDisplay();
            
            // Update style tombol
            nextButton.classList.remove('border-[#999999]');
            nextButton.classList.add('border-[#343741]');
            if (currentPage === 1) {
                prevButton.classList.remove('border-[#343741]');
                prevButton.classList.add('border-[#999999]');
            }
        }
    });

    // Event listener untuk tombol next
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            scrollToPage(currentPage);
            updatePageDisplay();
            
            // Update style tombol
            prevButton.classList.remove('border-[#999999]');
            prevButton.classList.add('border-[#343741]');
            if (currentPage === totalPages) {
                nextButton.classList.remove('border-[#343741]');
                nextButton.classList.add('border-[#999999]');
            }
        }
    });

    // Inisialisasi tampilan halaman
    updatePageDisplay();
    
    // Set tombol previous ke disabled style pada awal
    prevButton.classList.add('border-[#999999]');
});

// Testimoni Slider Control
document.addEventListener('DOMContentLoaded', function() {
    // Selector untuk testimoni
    const testimoniContainer = document.querySelector('#testimoni .w-full.flex.overflow-x-auto');
    const testimoniPrevButton = document.querySelector('#testimoni button svg[stroke="#999999"]').closest('button');
    const testimoniNextButton = document.querySelector('#testimoni button svg[stroke="#343741"]').closest('button');
    const testimoniPageText = document.querySelector('#testimoni p[class*="font-normal text-[#343741]"]');
    const testimoniCards = document.querySelectorAll('#testimoni .w-96.rounded-2xl');
    
    let currentTestimoniPage = 1;
    const testimoniCardsPerPage = 3;
    const totalTestimoniPages = Math.ceil(testimoniCards.length / testimoniCardsPerPage);
    
    // Update tampilan halaman testimoni
    function updateTestimoniPageDisplay() {
        testimoniPageText.innerHTML = `<span class="text-[#FF652F]">${currentTestimoniPage}</span> / ${totalTestimoniPages}`;
    }

    // Fungsi scroll ke halaman tertentu untuk testimoni
    function scrollToTestimoniPage(page) {
        const cardWidth = testimoniCards[0].offsetWidth;
        const spacing = 28; // space-x-7 = 1.75rem = 28px
        const scrollAmount = (cardWidth + spacing) * ((page - 1) * testimoniCardsPerPage);
        testimoniContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Event listener untuk tombol previous testimoni
    testimoniPrevButton.addEventListener('click', () => {
        if (currentTestimoniPage > 1) {
            currentTestimoniPage--;
            scrollToTestimoniPage(currentTestimoniPage);
            updateTestimoniPageDisplay();
            
            // Update style tombol
            testimoniNextButton.classList.remove('border-[#999999]');
            testimoniNextButton.classList.add('border-[#343741]');
            if (currentTestimoniPage === 1) {
                testimoniPrevButton.classList.remove('border-[#343741]');
                testimoniPrevButton.classList.add('border-[#999999]');
            }
        }
    });

    // Event listener untuk tombol next testimoni
    testimoniNextButton.addEventListener('click', () => {
        if (currentTestimoniPage < totalTestimoniPages) {
            currentTestimoniPage++;
            scrollToTestimoniPage(currentTestimoniPage);
            updateTestimoniPageDisplay();
            
            // Update style tombol
            testimoniPrevButton.classList.remove('border-[#999999]');
            testimoniPrevButton.classList.add('border-[#343741]');
            if (currentTestimoniPage === totalTestimoniPages) {
                testimoniNextButton.classList.remove('border-[#343741]');
                testimoniNextButton.classList.add('border-[#999999]');
            }
        }
    });

    // Inisialisasi tampilan halaman testimoni
    updateTestimoniPageDisplay();
    
    // Set tombol previous ke disabled style pada awal
    testimoniPrevButton.classList.add('border-[#999999]');
});


// Circle Animation Control
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle-1, .circle-2');
    
    circles.forEach(circle => {
        circle.style.transformOrigin = 'center center';
    });
});