'use client';

import PropTypes from "prop-types";
import { memo, useMemo } from "react";

const SectionTitleComponent = ({ title,
    subTitle,
    titleOption = "text-center",
    headingOption = "title" }) => {
    const titleContent = useMemo(() => ({
        __html: title || ''
    }), [title]);

    const subTitleContent = useMemo(() => ({
        __html: subTitle || ''
    }), [subTitle]);

    return (
        <div
            className={`section-title ${titleOption}`}
            data-aos="fade-up"
            style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '0 100px'
            }}
        >
            
            <h2
  className={`title ${headingOption} leading-normal pb-2 overflow-visible`}
  dangerouslySetInnerHTML={titleContent}
/>

            {subTitle && (
                <p
                    className="mt-2"
                    dangerouslySetInnerHTML={subTitleContent}
                    style={{
                        contentVisibility: 'auto',
                        containIntrinsicSize: '0 24px'
                    }}
                />
            )}
        </div>
    )
};

SectionTitleComponent.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    titleOption: PropTypes.string,
    headingOption: PropTypes.string
};

SectionTitleComponent.defaultProps = {
    titleOption: "text-center",
    headingOption: "title"
};

const SectionTitle = memo(SectionTitleComponent);
SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;


