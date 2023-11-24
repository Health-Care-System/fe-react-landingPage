export const Accordion = ({id, title, content}) => {
  return (
    <div 
      style={{maxWidth: '45rem', width: '100%'}}
      className="accordion-item border-0 rounded-4">
      <h2 className="accordion-header rounded-4">
        <button 
          className="accordion-button bg-white border-0 shadow-sm rounded-4 text-primary fs-4 fw-bold" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#acordion${id}`} 
          aria-expanded="true" 
          aria-controls={`acordion${id}`}>
          {title}
        </button>
      </h2>
      <div 
        id={`acordion${id}`} 
        className="accordion-collapse collapse rounded-4">
        <div 
          className="accordion-body text-green-300">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
