export const menuItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About Us', path: '/about-us' },
    { id: 3, name: 'Shop', path: '/shop' },
    { id: 4, name: 'Pages', path: '/fashion',
        children: [
            { id: 41, name: 'FAQs', path: '/faqs' },
            { id: 42, name: 'Privacy & Policy', path: '/policy' },
            { id: 43, name: 'Terms & Conditions', path: '/terms' },
            { id: 43, name: 'Login', path: '/login' },
            { id: 43, name: 'Register', path: '/register' },
            { id: 43, name: 'Forgot Password', path: '/forgot' },
            { id: 43, name: 'My Cart', path: '/cart' },
            { id: 43, name: 'My wishlist', path: '/wishlist' },
            { id: 43, name: 'Checkout', path: '/Checkout' },
            { id: 43, name: '404', path: '/Error 404' }
          ]
     },
    { id: 5, name: 'Contact Us', path: '/contact' }
];