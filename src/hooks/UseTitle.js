export default function UseTitle({ title, description }) {
    document.title = `${title} | BLINDIN`    
    
    const metaDescription = document.querySelector('meta[name="description"]')
    metaDescription.setAttribute('content', description)
}
