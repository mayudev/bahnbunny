import { getHeaders } from './header.js';

const formatStationBoardReq = (ctx, station, type) => {
	const {profile, opt} = ctx;

	const body = {anfragezeit: profile.formatTimeOfDay(profile, opt.when), datum: profile.formatDate(profile, opt.when), ursprungsBahnhofId: profile.formatStation(station).lid, verkehrsmittel: profile.formatProductsFilter(ctx, opt.products || {}, 'dbnav')}
	const headers = getHeaders('application/x.db.vendo.mob.bahnhofstafeln.v2+json');
	const obj = {
		endpoint: profile.boardEndpoint,
		path: type == 'departures' ? 'abfahrt' : 'ankunft',
		body,
		method: 'POST',
		headers,
	}

	return obj;
};

export {
	formatStationBoardReq
};

