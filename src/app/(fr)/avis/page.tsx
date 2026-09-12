const GOOGLE_REVIEWS_URL = 'https://node-1.consolex1.com:10001/api/google-reviews';

type Review = {
  author_name?: string;
  text?: string;
  rating?: number;
  relative_time_description?: string;
  profile_photo_url?: string;
};

type GoogleReviewsPayload = {
  rating?: number;
  user_ratings_total?: number;
  reviews?: Review[];
};

type GoogleReviewsState = {
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
  error?: string;
};

async function getGoogleReviews(): Promise<GoogleReviewsState> {
  try {
    const res = await fetch(GOOGLE_REVIEWS_URL, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Google reviews request failed with status ${res.status}`);
    }

    const data = (await res.json()) as GoogleReviewsPayload;

    return {
      rating: typeof data.rating === 'number' ? data.rating : 0,
      user_ratings_total: typeof data.user_ratings_total === 'number' ? data.user_ratings_total : 0,
      reviews: Array.isArray(data.reviews) ? data.reviews.slice(0, 5) : [],
    };
  } catch (error) {
    console.error('Unable to fetch Google reviews:', error);

    return {
      rating: 0,
      user_ratings_total: 0,
      reviews: [],
      error: 'Les avis Google sont momentanément indisponibles. Merci de réessayer dans quelques instants.',
    };
  }
}

const formatCount = (value: number) =>
  new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(value);

export const metadata = {
  title: 'Avis clients',
  description: 'Consultez les avis Google de Consolex1 et découvrez la note globale des clients.',
};

export default async function AvisPage() {
  const { rating, user_ratings_total, reviews, error } = await getGoogleReviews();

  const formattedRating = typeof rating === 'number' && rating > 0 ? rating.toFixed(1) : '0.0';
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating || 0));

  return (
    <section className="section reviews-page">
      <div className="section-header">
        <span className="badge">Avis clients</span>
        <h1>Ce que nos clients pensent de Consolex1</h1>
        <p className="section-description">
          La note globale et les derniers avis Google sont récupérés automatiquement.
        </p>
      </div>

      <div className="review-overview">
        <div className="rating-summary">
          <div className="rating-display">
            <div className="rating-value">{formattedRating}</div>
            <div className="rating-stars" aria-label={`Note Google ${formattedRating} sur 5`}>
              {stars.map((isActive, index) => (
                <span key={index} className={isActive ? 'star active' : 'star'}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="rating-meta">
            <strong>{formatCount(user_ratings_total)} avis Google</strong>
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="reviews-cta">
          <p>Consultez directement les avis publics sur Google.</p>
          <a
            className="button button-primary"
            href="https://g.page/r/CcByF4wGDNLUECE/review"
            target="_blank"
            rel="noreferrer"
          >
            Voir les avis Google
          </a>
        </div>
      </div>

      <div className="trustpilot-widget-wrapper">
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>

        <div
          className="trustpilot-widget"
          data-locale="fr-FR"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="6a70fc65701e0ea478abf809"
          data-style-height="52px"
          data-style-width="100%"
          data-token="869b4f20-0ee8-460d-a318-d3fee9bb99cf"
        >
          <a href="https://www.trustpilot.com/review/consolex1.com" target="_blank" rel="noopener">
            Trustpilot
          </a>
        </div>
      </div>

      {error ? (
        <div className="info-banner">
          <p>{error}</p>
        </div>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review, index) => {
            const author = review.author_name || `Client ${index + 1}`;
            const text = review.text || 'Avis public disponible sur Google.';
            const relativeTime = review.relative_time_description || 'Récemment';

            return (
              <article key={`${author}-${index}`} className="review-card">
                <div className="review-header">
                  <div className="review-author-wrapper">
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={author}
                        className="review-avatar"
                      />
                    ) : (
                      <div className="review-avatar placeholder">{author.charAt(0).toUpperCase()}</div>
                    )}
                    <div>
                      <h2>{author}</h2>
                      <p>{relativeTime}</p>
                    </div>
                  </div>
                  <div className="review-rating" aria-label={`Note ${review.rating ?? 0} sur 5`}>
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <span
                        key={starIndex}
                        className={starIndex < Math.round(review.rating ?? 0) ? 'star active' : 'star'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="review-text">“{text}”</p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
