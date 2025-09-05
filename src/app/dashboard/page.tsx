import SpotifyButton from '@/presentation/components/auth/spotify-button';
import { Button } from '@/presentation/components/ui/button';

export default async function DashboardPage() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // const { accessToken } = await auth.api.getAccessToken({
  //   body: {
  //     providerId: 'spotify',
  //   },
  //   headers: await headers(),
  // })

  // const accounts = await auth.api.listUserAccounts({
  //   headers: await headers(),
  // });

  // const spotifyAccount = accounts.find(account => account.provider === 'spotify');

  // if (!spotifyAccount) {
  //   throw new Error('Spotify account not found');
  // }

  // console.log('Spotify account found:', spotifyAccount);

  // console.log('Spotify access token on dashboard:', accessToken);

  // const response = await fetch(`https://api.spotify.com/v1/users/${spotifyAccount.accountId}/playlists`, {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // const playlists = await response.json();

  // console.log('Spotify playlists:', playlists);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <SpotifyButton />
        <Button>Connect with Apple Music</Button>
      </div>
      {/* <div>
        {playlists.items.map((playlist: any) => (
          <Card key={playlist.id}>
            <h2>{playlist.name}</h2>
            <p>{playlist.description}</p>
            <p>{playlist.tracks.total} tracks</p>
          </Card>
        ))}
      </div> */}
    </>
  );
}
