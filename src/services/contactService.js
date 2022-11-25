import {httpService} from "./http.service"

export const contactService = {
  sendEmail,
}

async function sendEmail(userCred) {
  try {
    const res = await httpService.post("send", userCred)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
