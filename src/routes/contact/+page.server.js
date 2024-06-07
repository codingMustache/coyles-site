import { emailer } from '$lib/emailer.js'
import { imgParser } from '$lib/imgParser';
import { msgParser } from '$lib/msgParser';

export const actions = {

  /**
  @param requet {Request}
  */
  // @ts-ignore
  contact: async ({ request }) => {

    const form = await request.formData()
    const formObj = Object.fromEntries(form.entries())
    const files = form.getAll('references')
    const attachments = await imgParser(files)
    const htmlParser = msgParser(formObj)
    
    emailer(htmlParser, attachments)

    return { success: true };
  }
};