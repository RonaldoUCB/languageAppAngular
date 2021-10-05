export interface Language {
    name: string;
    last_update: string;
    _links: {
        self: {
          href: string
        },
        language: {
          href: string
        }
      };
}