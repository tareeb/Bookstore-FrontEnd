const booksdata = [
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'1 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'2 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'3 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'4 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'5 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'6 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'7 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'8 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'9 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'10 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'11 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'12 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'13 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'14 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'15 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'16 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'17 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'18 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'19 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'20 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'21 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'22 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'23 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'24 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'25 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'26 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'27 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'28 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'29 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'30 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'31 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'32 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'33 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'34 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'35 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'36 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    },
    {
        price:'12.00',
        name:'You Are Your Only Limit', 
        writer:'37 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-1.jpg.pagespeed.ic.7REd66f0KP.webp'
    },
    {
        price:'10.00',
        name:'101 Essays That Will Change The Way Your Thinks',
        writer:'38 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-2.jpg.pagespeed.ic.16ufL7WVkm.webp'
    },
    {
        price:'8.00', 
        name:'Your Soul Is A River', 
        writer:'39 By John Nathan Muller',
        src:'https://preview.colorlib.com/theme/publishingcompany/images/xbook-3.jpg.pagespeed.ic._2dqf9BoL2.webp'
    }
] 

export default booksdata