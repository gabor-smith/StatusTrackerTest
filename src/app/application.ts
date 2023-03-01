export interface Application {
  name: string;
  releasedVersion: string;
  releaseCandidatesVersions: string[];
  tagsVersions: string[];
  wikiVersion: string;
  features: Feature[];
}

export interface Feature {
  name: string,
  version: string
}
