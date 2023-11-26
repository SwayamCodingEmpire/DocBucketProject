export const idlFactory = ({ IDL }) => {
  const Profile = IDL.Record({
    'stream' : IDL.Text,
    'cgpa' : IDL.Float64,
    'name' : IDL.Text,
    'degree' : IDL.Text,
    'registration_no' : IDL.Nat,
    'passout_year' : IDL.Nat,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  return IDL.Service({
    'create_profile' : IDL.Func([Profile], [], []),
    'delete_profile' : IDL.Func([IDL.Nat], [Result], []),
    'read_profile' : IDL.Func([IDL.Nat], [IDL.Opt(Profile)], ['query']),
    'test' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
