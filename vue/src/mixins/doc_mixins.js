import api from '@/api/user'
import { deleteFile } from '@/config'
export default {
  data: function () {
    return {

    }
  },
  methods: {
    /**
     * Remove document, i.e if a user made a mistake
     */
    async removeDoc (index, url, _id, docs) {
      let loader = this.$loading.show()
      deleteFile(url)
      await api.userDeleteDoc(_id)
      docs.splice(index, 1)
      loader.hide()
    },
    /**
     * Add a document row
     */
    addDocRow (doc) {
      doc.push({
        name: '',
        file: {
          name: 'Choose File'
        }
      })
    },
    /**
     * Remove document row
     */
    removeDocElement (index, docs) {
      docs.splice(index, 1)
    },
    /**
     * Set filename of document
     */
    setDocFilename (event, doc) {
      var file = event.target.files[0]
      doc.file = file
    }
  }
}
