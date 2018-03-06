import React, { Component } from 'react';

import Stat, { StatsWrapper } from '../UI/Stat';
import Progress, { ProgressWrapper } from '../UI/Progress';
import Box from '../UI/Box';
import Card, { CardsWrapper } from '../UI/Card';

import Backend from '../Layouts/Backend';
import Chart from '../Helpers/ChartBars';
import PageHeader from '../Helpers/PageHeader';

export default class Dashboard extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner no-padding-top no-padding-left no-padding-right">
                  <Box title="Most Recently Uploaded Files" classes="side-margins">
                      <CardsWrapper>
                          <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                subtitle="Quisque tristique erat ut volutpat vehicula"
                                image="/img/tmp/listing-1.jpg"
                                date="14/07/2017 13:15"/>

                          <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                subtitle="Quisque tristique erat ut volutpat vehicula"
                                image="/img/tmp/listing-2.jpg"
                                date="14/07/2017 12:30"/>

                          <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                subtitle="Quisque tristique erat ut volutpat vehicula"
                                filetype="picture_as_pdf"
                                date="14/07/2017 12:30"/>

                          <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                subtitle="Quisque tristique erat ut volutpat vehicula"
                                filetype="image"
                                date="14/07/2017 13:15"/>
                      </CardsWrapper>
                  </Box>


                    <Box title="" classes="side-margins">
                        <CardsWrapper>
                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  image="/img/tmp/listing-1.jpg"
                                  date="14/07/2017 13:15"/>

                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  image="/img/tmp/listing-2.jpg"
                                  date="14/07/2017 12:30"/>

                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  filetype="picture_as_pdf"
                                  date="14/07/2017 12:30"/>

                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  filetype="image"
                                  date="14/07/2017 13:15"/>
                        </CardsWrapper>
                    </Box>
                </div>
            </Backend>
        );
    }
}
