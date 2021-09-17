import { offersData } from './data'

export default function Offers() {
  return (
    <div className="zone1">
      <div className="offers__container">
        <div className="offer__opening">
          <div className="offers__disclosure-modal">
            <input
              type="checkbox"
              name="modal"
              id="modal"
              className="offers__disclosure-modal--checkbox"
            />
            <label className="offers__disclosure-modal--toggle" htmlFor="modal">
              Advertiser disclosure
            </label>
            <div className="offers__background"></div>
            <div className="offers__modal">
              <label className="modal__close" htmlFor="modal">
                <svg viewBox="0 0 48 48">
                  <g fillRule="evenodd">
                    <path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"></path>
                    <path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"></path>
                  </g>
                </svg>
              </label>
              <div className="modal__info">
                <div className="modal__label">ADVERTISER DISCLOSURE POLICY</div>
                <div className="modal__text">
                  Please review the
                  <u>
                    following disclosures regarding our material connection to
                    the advertisers
                  </u>
                  on our website and any testimonials or endorsements which also
                  appear on our website from time to time.
                </div>
                <div className="modal__label">
                  COMPENSATION DISCLOSURE POLICY
                </div>
                <div className="modal__text">
                  This website is a marketplace. The owner has a material
                  financial connection to the provider of the goods and services
                  referred to on the site. The owner receives payment for each
                  qualified sale or payment for each potential customer
                  referral. The owner may be advertising on behalf of a
                  third-party advertiser with whom the provider of the products
                  or services also has a material financial connection in that
                  both advertisers receive payment for each qualified sale or
                  payment for each potential customer referral. Information
                  regarding the products and services on this website may be
                  provided by a third-party advertising such product and service
                  on the site and therefore the correctness of such
                  representations are unknown to the site owner who does not
                  undertake due diligence to confirm such third-party
                  representations regarding third-party advertising claims.
                </div>
                <div className="modal__text">
                  Please be sure to review the terms of use and privacy policy
                  on this website. If you are redirected to a third-party
                  advertiser’s site and you should review their terms of use and
                  privacy policy as they may differ significantly from those
                  posted on this site. The owner is not affiliated with any
                  third-party advertiser other than stated above. The owner does
                  not recommend or endorse any product or service on this
                  website.
                </div>
                <div className="modal__label">
                  TESTIMONIAL AND ENDORSEMENT DISCLOSURE
                </div>
                <div className="modal__text">
                  The owner does not affiliate with any third-party advertiser
                  other than as stated above. The owner does not recommend or
                  endorse any product or service on this website.
                </div>
                <div className="modal__text">
                  To the extent, there are testimonials on the website that are
                  not provided by the owner of the website, the advertiser
                  providing such testimonials warrants that the results provided
                  are accurate and true. The advertiser has informed the owner
                  that the individual was given compensation for the
                  testimonial. The testimonial is an example and not necessarily
                  typical or average nor do they represent a guarantee of your
                  personal results. Please contact the advertiser with any
                  questions regarding claims made herein or such testimonials or
                  endorsements.
                </div>
              </div>
            </div>
          </div>
          <div className="offers__headline" id="page__title">
            Best <span className="primary">Mortgage Refinance Rates</span> 2021
          </div>
          <div className="offers__subheadline" id="page__subtitle">
            Compare today's refinance rates.
          </div>
          <div className="offers__description" id="page__description">
            <p>
              Finding the lowest mortgage refinance rates can save you a lot of
              money, but you should also know when to refinance and what terms
              to look for. Compare providers below.
            </p>
          </div>
        </div>
        <div className="offers__list">
          {offersData.map(({ id, name, subtitle, image, features }) => (
            <div id={id} className="offer" key={id}>
              <div className="left__info">
                <div className="index-counter">
                  <div className="index-counter__value"></div>
                  <div className="index-counter__border"></div>
                </div>
                <div className="ribbon">
                  <div className="ribbon__border_left"></div>
                  <div className="ribbon__text">Low Rates</div>
                </div>
              </div>
              <div className="offer__image">
                <img src={image} alt={name} />
              </div>
              <div className="vertical__line"></div>
              <div className="offer__headling">{name}</div>
              <div className="offer__subheadling">{subtitle}</div>
              <div className="offer__features">
                <ul
                  className="disclaimerPopup"
                >
                  {features.map((element, idx) => (
                    <li key={idx}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                        ></path>
                      </svg>
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__cta">
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  VIEW RATES
                </a>
                <div className="offer__lang"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
