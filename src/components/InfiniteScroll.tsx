import { debounce } from 'lodash';
import { useRef, useEffect, useState, PropsWithChildren } from 'react';
import styled from 'styled-components';

type InfiniteScrollProps = {
    trigger: () => void;
};

const InfiniteContainer = styled.div`
    overflow-y: auto;
    max-height: 70vh;
`;

const DEBOUNCE_TIME = 500;

const InfiniteScroll = ({ trigger, children }: PropsWithChildren<InfiniteScrollProps>) => {
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (
            containerRef.current &&
            containerRef.current.scrollTop + containerRef.current.clientHeight >=
                containerRef.current.scrollHeight - 100
        ) {
            loadNextPage();
        }
    };

    const loadNextPage = () => {
        if (isLoading) return;
        setIsLoading(true);
        trigger();
        setIsLoading(false);
    };

    useEffect(() => {
        const debounced = debounce(() => {
            if (containerRef.current) {
                containerRef.current.addEventListener('scroll', handleScroll);
            }
        }, DEBOUNCE_TIME);

        debounced();

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
            debounced.cancel();
        };
    }, []);

    return <InfiniteContainer ref={containerRef}>{children}</InfiniteContainer>;
};

export default InfiniteScroll;
