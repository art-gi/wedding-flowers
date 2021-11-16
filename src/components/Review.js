function Reviews() {
    return (
        <div className="wrapper bgded" style={{backgroundImage: 'url(/images/demo/backgrounds/03.png)'}}>
      <section id="testimonials" className="hoc clear"> 
        <div className="one_half overlay">
          <ul className="nospace">
            <li>
              <blockquote>I had an assortment of self-standing roses, peonies, and poppies made for my daughters joint birthday celebration. Geri was so easy to work from beginning to end and was so incredibly talented. I was in a time crunch, so I fretted over the flowers not arriving in time, but Geri tracked the shipment the whole way. When they arrived, everyone was blown away how gorgeous they were. Thank you so much, Geri!!!</blockquote>
              <figure className="clear"><img className="circle" src="{'/images/demo/60x60.png'}" alt="" />
                <figcaption>
                  <h6 className="heading">Emily</h6>
                  <em>Customer Of Our Store On Etsy</em></figcaption>
              </figure>
            </li>a
            <li>
            <div>
              <a className="btn inverse" href="/reviews">View More</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    );
}
export default Reviews;