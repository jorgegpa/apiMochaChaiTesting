import {} from 'dotenv/config'
import chai from 'chai'
import chaitHttp from 'chai-http'

describe('Projects API ENDPOINTS Tests',() => {
    const AUTH_TOKEN = process.env.API_TOKEN
    const PROJECTS_PATH='/projects' 
  beforeEach(()=>{
      chai.use(chaitHttp)
      chai.should()
  })
it('Get ALL Projects', () => {
        console.log(process.env.URL_BASE)
        chai.request(process.env.URL_BASE)
        .get(PROJECTS_PATH)
        .set('Authorization','Bearer '+AUTH_TOKEN)
        .end((err,res) => {
            res.should.have.status(200)
            console.log(res.body[0].name)
            res.body[0].name.should.be.equal('Inbox')
        })
    })
})