import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
    Eventcalendar,
    setOptions,
    localeVi,
    Select,
    getJson,
    Dropdown,
    locale,
    CalendarPrev,
    CalendarNext,
    Button,
    CalendarNav,
} from "@mobiscroll/react";
import { useMemo } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
setOptions({
    locale: localeVi,
    theme: "windows",
    themeVariant: "light",
});

const Timeline = () => {
    const [selectedView, setView] = useState("week");
    const myView = useMemo(
        () =>
            selectedView === "day"
                ? {
                      timeline: {
                          type: "day",
                          size: 1,
                          maxEventStack: 2,
                          eventList: false,
                      },
                  }
                : selectedView === "week"
                ? {
                      timeline: {
                          type: "week",
                          size: 1,
                          maxEventStack: 2,
                          eventList: false,
                          resolutionHorizontal: "day",
                      },
                  }
                : {
                      timeline: {
                          type: "month",
                          size: 1,
                          maxEventStack: 4,
                          eventList: false,
                          resolutionHorizontal: "day",
                      },
                  },
        [selectedView]
    );
    const views = [
        {
            text: "Ngày",
            value: "day",
        },
        {
            text: "Tuần",
            value: "week",
        },
        {
            text: "Tháng",
            value: "month",
        },
    ];
    const viewChange = useCallback((event) => {
        setView(event.value);
    }, []);
    const [mySelectedDate, setSelectedDate] = useState(new Date());
    const navigate = useCallback(() => {
        setSelectedDate(new Date());
    }, []);
    const renderMyHeader = useCallback(() => (
        <>
            <CalendarNav className="md-sync-events-outlook-nav" />
            <Select
                data={views}
                value={selectedView}
                onChange={viewChange}
                inputStyle="box"
            />
            <Button onClick={navigate}>Today</Button>
            <CalendarPrev />

            <CalendarNext />
        </>
    ),[navigate]);

    const myEvents = useMemo(
        () => [
            {
                start: "2024-11-02T00:00",
                end: "2024-11-05T00:00",
                title: "Event 1",
                resource: 1,
            },
            {
                start: "2024-11-10T09:00",
                end: "2024-11-15T15:00",
                title: "Event 2",
                resource: 3,
            },
            {
                start: "2024-11-12T00:00",
                end: "2024-11-14T00:00",
                title: "Event 3",
                resource: 4,
            },
            {
                start: "2024-11-15T07:00",
                end: "2024-11-20T12:00",
                title: "Event 4",
                resource: 5,
            },
            {
                start: "2024-11-03T00:00",
                end: "2024-11-10T00:00",
                title: "Event 5",
                resource: 6,
            },
            {
                start: "2024-11-10T08:00",
                end: "2024-11-11T20:00",
                title: "Event 6",
                resource: 7,
            },
            {
                start: "2024-11-22T00:00",
                end: "2024-11-28T00:00",
                title: "Event 7",
                resource: 7,
            },
            {
                start: "2024-11-08T00:00",
                end: "2024-11-13T00:00",
                title: "Event 8",
                resource: 15,
            },
            {
                start: "2024-11-25T00:00",
                end: "2024-11-27T00:00",
                title: "Event 9",
                resource: 10,
            },
            {
                start: "2024-11-20T00:00",
                end: "2024-11-23T00:00",
                title: "Event 10",
                resource: 12,
            },
        ],
        []
    );

    const myResources = useMemo(
        () => [
            {
                id: 1,
                name: "Resource A",
                color: "#e20000",
            },
            {
                id: 2,
                name: "Resource B",
                color: "#76e083",
            },
            {
                id: 3,
                name: "Resource C",
                color: "#4981d6",
            },
            {
                id: 4,
                name: "Resource D",
                color: "#e25dd2",
            },
            {
                id: 5,
                name: "Resource E",
                color: "#1dab2f",
            },
            {
                id: 6,
                name: "Resource F",
                color: "#d6d145",
            },
            {
                id: 7,
                name: "Resource G",
                color: "#34c8e0",
            },
            {
                id: 8,
                name: "Resource H",
                color: "#9dde46",
            },
            {
                id: 9,
                name: "Resource I",
                color: "#166f6f",
            },
            {
                id: 10,
                name: "Resource J",
                color: "#f7961e",
            },
            {
                id: 11,
                name: "Resource K",
                color: "#34c8e0",
            },
            {
                id: 12,
                name: "Resource L",
                color: "#af0000",
            },
            {
                id: 13,
                name: "Resource M",
                color: "#446f1c",
            },
            {
                id: 14,
                name: "Resource N",
                color: "#073138",
            },
            {
                id: 15,
                name: "Resource O",
                color: "#4caf00",
            },
        ],
        []
    );

    const [lang, setLang] = useState("en");
    const languages = useMemo(
        () => [
            {
                value: "en",
                text: "English",
            },
            {
                value: "ar",
                text: "Arabic",
            },
            {
                value: "bg",
                text: "Bulgarian",
            },
            {
                value: "ca",
                text: "Català",
            },
            {
                value: "cs",
                text: "Cestina",
            },
            {
                value: "zh",
                text: "Chinese",
            },
            {
                value: "hr",
                text: "Croatian",
            },
            {
                value: "da",
                text: "Dansk",
            },
            {
                value: "de",
                text: "Deutsch",
            },
            {
                value: "en-GB",
                text: "English (UK)",
            },
            {
                value: "es",
                text: "Español",
            },
            {
                value: "fr",
                text: "Français",
            },
            {
                value: "el",
                text: "Greek",
            },
            {
                value: "hi",
                text: "Hindi",
            },
            {
                value: "it",
                text: "Italiano",
            },
            {
                value: "ja",
                text: "Japanese",
            },
            {
                value: "ko",
                text: "Korean",
            },
            {
                value: "lt",
                text: "Lietuvių",
            },
            {
                value: "hu",
                text: "Magyar",
            },
            {
                value: "nl",
                text: "Nederlands",
            },
            {
                value: "no",
                text: "Norsk",
            },
            {
                value: "pl",
                text: "Polski",
            },
            {
                value: "pt-PT",
                text: "Português Europeu",
            },
            {
                value: "pt-BR",
                text: "Pt. Brasileiro",
            },
            {
                value: "ro",
                text: "Româna",
            },
            {
                value: "sr",
                text: "Serbian",
            },
            {
                value: "sk",
                text: "Slovencina",
            },
            {
                value: "fi",
                text: "Suomi",
            },
            {
                value: "sv",
                text: "Svenska",
            },
            {
                value: "th",
                text: "Thai",
            },
            {
                value: "tr",
                text: "Türkçe",
            },
            {
                value: "ua",
                text: "Ukrainian",
            },
            {
                value: "vi",
                text: "Vietnamese",
            },
            {
                value: "ru",
                text: "Русский",
            },
            {
                value: "ru-UA",
                text: "Русский (UA)",
            },
            {
                value: "he",
                text: "עברית",
            },
            {
                value: "fa",
                text: "فارسی",
            },
        ],
        []
    );
    const handleChange = useCallback((event) => {
        setLang(event.target.value);
    }, []);
    const [myEventss, setEventss] = useState([]);
    useEffect(() => {
        getJson(
            "https://trial.mobiscroll.com/timeline-events/",
            (events) => {
                setEventss(events);
            },
            "jsonp"
        );
    }, []);
    return (
        <div
            className="w-[90%] h-[800px] mx-auto border border-gray-100 rounded-md p-4 overflow-auto relative [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
            <div className="mbsc-grid">
                <div className="mbsc-row mbsc-justify-content-center">
                    <div className="mbsc-col-sm-8">
                        <Dropdown
                            inputStyle="box"
                            value={lang}
                            onChange={handleChange}
                        >
                            {languages.map((lang) => (
                                <option key={lang.value} value={lang.value}>
                                    {lang.text}
                                </option>
                            ))}
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Eventcalendar
                locale={locale[lang]}
                selectedDate={mySelectedDate}
                renderHeader={renderMyHeader}
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                eventDelete={false}
                view={myView}
                data={myEvents}
                resources={myResources}
                nowIndicator={true}
            />
        </div>
    );
};

export default Timeline;
