import {} from 'dotenv/config'
import chai from 'chai'
import chaitHttp from 'chai-http'

class BaseTest {
    initSetup() {
        chai.use(chaitHttp)
        chai.should()
    }

    getAuthToken(){
        return process.env.API_TOKEN;
    }
}

export default new BaseTest()