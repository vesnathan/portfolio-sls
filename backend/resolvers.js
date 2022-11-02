module.exports = {
  Query: {
      product: (_, data) => {
          // can do anything here, like hit database
          return {
              name: 'Nathan Loudon',
              number: "0423 867 510",
              email: "vesnathan@gmail.com"
          }
      }
  }
}