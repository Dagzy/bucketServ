const Auth = require('./controllers/auth');
const BucketList = require('./controllers/bucketlistcontroller')

const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){
	app.post('/api/signup', Auth.signup);
	app.post('/api/signin', requireSignin, Auth.signin);
	app.post('/api/new-item', requireAuth, BucketList.addBucketList);
	app.get('/api/items', requireAuth, BucketList.fetchBucketLists);
	app.delete('/api/items/:id', requireAuth, BucketList.deleteBucketList);
	app.get('/api/items/:id', requireAuth, BucketList.fetchBucketList);
	app.put('/api/items/:id', requireAuth, BucketList.updateBucketList);
}
//console.log(req.body);