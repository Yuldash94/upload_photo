import {upload} from './upload.js'

upload('#file', {
    multi: true,
    accept: ['.png', '.jpeg', '.jpg', '.gif'],
    onUpload(files) {
        console.log('Files:', files);
    }
})
