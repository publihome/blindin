export default function UseTitle({ title, description }) {
    var $title = "BLINDIN" 
    document.title = `${$title} - ${title}`    
    
    const metaDescription = document.querySelector('meta[name="description"]')
    metaDescription.setAttribute('content', description)
}
