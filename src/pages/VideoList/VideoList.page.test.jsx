import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoListPage from '.';
import DataProvider from '../../states/provider';
import mockedData from '../../data/mockItems.json';

describe('Home Component tests', () => {
    it('Card Section Contain title', () => {
        render(
            <DataProvider response={mockedData}>
                <VideoListPage />
            </DataProvider>
        );
        expect(
            screen.getByText('Video Tour | Welcome to Wizeline Guadalajara').tagName
        ).toBe('H3');
    });
    it('Card Section Contain Description', () => {
        render(
            <DataProvider response={mockedData}>
                <VideoListPage />
            </DataProvider>
        );
        expect(
            screen.getByText(
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...'
            ).tagName
        ).toBe('P');
    });
    it('Card Section Contain image', () => {
        render(
            <DataProvider response={mockedData}>
                <VideoListPage />
            </DataProvider>
        );
        expect(
            screen.getByAltText('Video Tour | Welcome to Wizeline Guadalajara').tagName
        ).toBe('IMG');
    });
    it('Card Section image size width', () => {
        render(
            <DataProvider response={mockedData}>
                <VideoListPage />
            </DataProvider>
        );

        const image = screen.getByAltText('Video Tour | Welcome to Wizeline Guadalajara');

        expect(image.width).toEqual(120);
    });
    it('Card Section image size height', () => {
        render(
            <DataProvider response={mockedData}>
                <VideoListPage />
            </DataProvider>
        );
        const image = screen.getByAltText('Video Tour | Welcome to Wizeline Guadalajara');
        expect(image.height).toEqual(90);
    });
});
