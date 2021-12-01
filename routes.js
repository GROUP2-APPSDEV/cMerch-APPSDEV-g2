import path from 'path';
const __dirname = path.resolve();

console.log('hello', __dirname)
import express from 'express'
const router = express.Router()

// index
router.route('/')
.get( (req, res, next) =>{
    res.set('Content-type', 'text/html')
    res.sendFile(path.join(__dirname + '/html/index.html'), (err) =>{
        if (err){
            next(err)
        }else{console.log('sent get / ')}
    })
})

// products
router.route('/products')
.get( (req, res, next) =>{
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname + '/html/products.html'), (err)=>{
        if (err){
            next(err)
        }else{console.log('sent get /products')}
    })
})
.post( (req, res) =>{
    res.set('Content-type', 'text/html')
    res.sendFile(path.join('/html/products.html'), {root: '.'})
})
// contact-us
router.route('/contact-us')
.get( (req, res, next) =>{
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname + '/html/contact-us.html'), (err)=>{
        if (err){
            next(err)
        }else{console.log('sent get /contact-us')}
    })
})
// contact-us
router.route('/about-us')
.get( (req, res, next) =>{
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname + '/html/about-us.html'), (err)=>{
        if (err){
            next(err)
        }else{console.log('sent get /about-us')}
    })
})
// view - /view/:cId
router.route('/view')
.get( (req, res, next) =>{
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname + '/html/view.html'), (err)=>{
        if (err){
            next(err)
        }else{console.log('sent get /view/:cId')}
    })
})

// log-in
router.route('/log-in')
.get( (req, res, next) =>{
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname + '/html/log-in.html'), (err)=>{
        if (err){
            next(err)
        }else{console.log('sent get /log-in')}
    })
})
router.route('/admin')
.get((req, res) =>{
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/admin_portal/admin.html'), (err) =>{
        if (err) next(err)
        console.log('you are in admin portal')
    })
})
.post((req, res) =>{
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/admin_portal/admin.html'), (err) =>{
        if (err) next(err)
        console.log('you are in admin portal ')
    })
})
export {router};

