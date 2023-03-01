export interface Application {
  name: string;
  releasedVersion: string;
  releaseCandidatesVersions: string[];
  tagsVersions: string[];
  wikiVersion: string;
  /*features: {
    name: string,
    version: string
  };*/
}
