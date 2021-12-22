
import { Link} from 'react-router-dom';

function Slider() {
    return (
        <div className="bgded overlay" style={{ backgroundImage: 'url(https://am3pap003files.storage.live.com/y4mxhkYnArqd_BB1YrzHlRhT-Pyvs1oJlYXzYktYS8zo-cejoeqsCzdFph_htHUhqrGt4tb8ePwzqM-Ml65Y1DOCkqWcTCkMDRmh0Ff9RiHjN0MrJxImpG8up2i6TAIgeAjb7tUHeiwZV2YyIkKS502BHEJjuDYithRJp1cjzHBrCuzKOgsy-SdoN8KR-Uv1Szh?width=945&height=756&cropmode=none)' }}>
        
            <div id="pageintro" className="hoc clear">
                <article>
                    <h3 className="heading">Weddings & Events</h3>
                    <div>
                        <ul className="nospace inline pushright">
                            <li><Link className="btn" to="/catalog">Shop</Link></li>
                            <li><Link className="btn inverse" to="/add-item">Add a listing</Link></li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    );
}
export default Slider;