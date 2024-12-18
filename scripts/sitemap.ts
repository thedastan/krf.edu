import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const links = [
		{ url: "/", changefreq: "daily", priority: 1.0 },
		{ url: "/administration", changefreq: "daily", priority: 0.8 },
		{ url: "/teachers", changefreq: "daily", priority: 0.8 },

		{ url: "/accreditation", changefreq: "daily", priority: 0.8 },
		{ url: "/accreditation/[id]", changefreq: "daily", priority: 0.9 },

		{ url: "/departments", changefreq: "daily", priority: 0.8 },
		{ url: "/departments/[id]", changefreq: "daily", priority: 0.9 },

		{ url: "/specialties", changefreq: "daily", priority: 0.8 },
		{ url: "/specialties/[id]", changefreq: "daily", priority: 0.9 },

		{ url: "/works", changefreq: "daily", priority: 0.8 },
		{ url: "/works/[id]", changefreq: "daily", priority: 0.9 },
	];

	const stream = new SitemapStream({ hostname: "https://krf-edu.vercel.app/" });
	res.writeHead(200, { "Content-Type": "application/xml" });

	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		res.end(data.toString())
	);
};
